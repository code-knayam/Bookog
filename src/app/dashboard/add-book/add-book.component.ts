import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as CONSTANTS from '../../shared/constants';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addBookForm = new FormGroup({
      bookTitle: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.APLHANUMERIC_REGEX)]),
      bookAuthor: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.NAME_REGEX)]),
      bookPages: new FormControl(null, [Validators.pattern(CONSTANTS.NUMERIC_REGEX)]),
      bookRating: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.NUMERIC_REGEX)])
    });
  }

}
