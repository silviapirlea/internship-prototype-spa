import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'create-internship-form',
  templateUrl: './create-internship-form.component.html',
  styleUrls: ['./create-internship-form.component.scss'],
})
export class CreateInternshipForm implements OnInit {
  readonly TITLE = 'title';
  readonly POSITION = 'position';
  readonly FIRST_NAME = 'firstName';
  readonly LAST_NAME = 'lastName';
  readonly PHONE = 'phone';

  formGroup: FormGroup;
  errorMessage: string;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onRegister(): void {
    console.log('created');
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
    });
  }
}
