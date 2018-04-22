import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentBooks: Book[];
  topBooks: Book[];
  booksRead;

  constructor(private dataStorageSerive: DataStorageService) {}

  ngOnInit() {
    this.recentBooks = this.dataStorageSerive.getRecentBooks();
    this.topBooks = this.dataStorageSerive.getTopBooks();
    this.booksRead = this.dataStorageSerive.getBooksRead();
  }

}
