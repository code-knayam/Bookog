import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import * as CONSTANTS from '../../../shared/constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.EMAIL_REGEX) ] ),
      password: new FormControl( null, [Validators.required, Validators.minLength(8), Validators.pattern(CONSTANTS.PASSWORD_REGEX) ])
    });
  }

  private onSubmit() {
  }
}
