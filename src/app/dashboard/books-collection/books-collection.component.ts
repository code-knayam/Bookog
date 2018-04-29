import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.css']
})
export class BooksCollectionComponent implements OnInit {

  bookCollection: Book[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.bookCollection = this.dataStorageService.getAllBooksRead();
  }

}
