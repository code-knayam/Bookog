import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import * as CONSTANTS from '../../../shared/constants';
import { AuthService } from '../../../shared/auth.service';
import { SpinnerService } from '../../../shared/spinner.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private authService: AuthService, private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.EMAIL_REGEX)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(CONSTANTS.PASSWORD_REGEX)])
    });
  }

  private onSubmit() {
    this.spinnerService.showSpinner();
    const email = this.signInForm.value['email'];
    const password = this.signInForm.value['password'];
    this.authService.signInUser(email, password);
  }
}
