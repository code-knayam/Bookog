import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as CONSTANTS from '../../../shared/constants';
import { AuthService } from '../../../shared/auth.service';
import { SpinnerService } from '../../../shared/spinner.service';
import { User } from '../../../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private authService: AuthService,
      private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signUpForm = new FormGroup({
      username: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.USERNAME_REGEX) ] ),
      email: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.EMAIL_REGEX) ] ),
      password: new FormControl( null, [Validators.required, Validators.minLength(8), Validators.pattern(CONSTANTS.PASSWORD_REGEX) ])
      // tslint:disable-next-line:max-line-length
      // confirmPassword: new FormControl( null, [Validators.required, Validators.minLength(8), Validators.pattern(CONSTANTS.PASSWORD_REGEX) ])
    });
  }

  private onSubmit() {
    this.spinnerService.showSpinner();
    const email = this.signUpForm.value['email'];
    const password = this.signUpForm.value['password'];
    const userName = this.signUpForm.value['username'];

    const newUser = new User('', userName, email);

    this.authService.signUpUser(newUser, password);
  }

}
