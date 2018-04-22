import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookItem: Book;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onDelete() {
    console.log('delete clicked');
  }
}
