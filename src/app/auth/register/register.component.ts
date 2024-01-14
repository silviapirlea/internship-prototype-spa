import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRoleEnum } from '../model/user-role.enum';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserModel } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { RoutesConstants } from '../../shared/RoutesConstants';
import { ORGANISATIONS } from 'src/app/auth/model/contants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  readonly EMAIL = 'email';
  readonly PASSWORD = 'password';
  readonly FIRST_NAME = 'firstName';
  readonly LAST_NAME = 'lastName';
  readonly PHONE = 'phone';
  readonly ROLE = 'role';
  readonly ORGANISATION = 'organisation';

  role: UserRoleEnum;
  formGroup: FormGroup;
  errorMessage: string;
  organisations: string[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.role = params['role'])
    );
    this.organisations = ORGANISATIONS.map((organisation) => organisation.name);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onRoleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.role = target.value as UserRoleEnum;
  }

  onRegister(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const user: UserModel = {
      ...this.formGroup.value,
      role: this.role,
      organisation: {
        id: ORGANISATIONS.find(
          (organisation) =>
            organisation.name === this.formGroup.value.organisation
        )?.id,
        name: this.formGroup.value.organisation,
      },
    };
    if (this.role === UserRoleEnum.STUDENT) {
      delete user['organisation'];
    }
    this.authService.register(user).subscribe({
      next: () => this.router.navigate([RoutesConstants.LOGIN]),
      error: (err) => (this.errorMessage = err.message),
    });
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      role: new FormControl(''),
      organisation: new FormControl(this.organisations[0]),
    });
  }
}
