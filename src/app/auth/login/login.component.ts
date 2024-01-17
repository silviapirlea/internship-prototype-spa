import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StorageService} from "../service/storage.service";
import {AuthService} from "../service/auth.service";
import {UserModel} from "../model/user.model";
import {Router} from "@angular/router";
import {UserRoleEnum} from "../model/user-role.enum";
import {RoutesConstants} from "../../shared/RoutesConstants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly EMAIL = 'email';
  readonly PASSWORD = 'password'

  formGroup: FormGroup;
  errorMessage: string;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly storageService: StorageService,
              private readonly authService: AuthService,
              private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(): void {
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;

    this.authService.login(email, password).subscribe({
        next: user => this.loginUser(user),
        error: err => this.errorMessage = err.message
      }
    )
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  private loginUser(user: UserModel): void {
    this.storageService.saveUser(user);
    this.redirectToUserBoard(user);
  }

  private redirectToUserBoard(user: UserModel): void {
    switch (user.role) {
      case UserRoleEnum.ORGANISATION:
        this.router.navigate([RoutesConstants.ORGANISATION_BOARD,]);
        break;
      case UserRoleEnum.STUDENT:
        this.router.navigate([RoutesConstants.STUDENT_BOARD]);
        break;
      default: this.router.navigate([RoutesConstants.LANDING]);
    }
  }
}
