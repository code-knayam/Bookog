import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../shared/book.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookItem: Book;
  isOpen = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onDelete() {
    console.log('delete clicked');
    console.log(this.bookItem.bookID);
    this.dataStorageService.deleteBook(this.bookItem.bookID);
  }
}
