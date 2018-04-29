import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as CONSTANTS from '../../shared/constants';
import { Book } from '../../shared/book.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  newBook: Book;
  showAddBookForm = true;
  showAddMoreBtn = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addBookForm = new FormGroup({
      bookTitle: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.APLHANUMERIC_REGEX)]),
      bookAuthor: new FormControl(null, [Validators.required, Validators.pattern(CONSTANTS.APLHANUMERIC_REGEX)]),
      bookPages: new FormControl(null, [Validators.pattern(CONSTANTS.NUMERIC_REGEX)]),
      bookRating: new FormControl(null, [
          Validators.required,
          Validators.pattern(CONSTANTS.DECIMAL_NUMBER_REGEX),
          Validators.min(1),
          Validators.max(5) ])
    });
  }

  onSubmit() {
    console.log(this.addBookForm);
    this.newBook = new Book(
      this.dataStorageService.getNextId(),
      this.addBookForm.value['bookTitle'],
      this.addBookForm.value['bookAuthor'],
      +this.addBookForm.value['bookRating'],
      +this.addBookForm.value['bookPages'],
      new Date,
      'assets/thumbnail_book_item.jpg'
    );
    this.dataStorageService.addNewBook(this.newBook);
    console.log(this.dataStorageService.getAllBooksRead());
    this.toggleFormAndBtn();
  }

  resetAndShowForm() {
    this.resetForm();
    this.toggleFormAndBtn();
  }

  resetForm() {
    this.addBookForm.reset();
  }

  toggleFormAndBtn() {
    // toggling add book form
    this.showAddBookForm = !this.showAddBookForm;
    // toggling add more btn
    this.showAddMoreBtn = !this.showAddMoreBtn;
  }

}
