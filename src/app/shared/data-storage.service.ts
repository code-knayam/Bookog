import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../shared/book.model';
import { UserDataStorageService } from './user-data-storage.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient,
        private userDataStorageService: UserDataStorageService) { }

    private books = [];
    booksChanged = new Subject<Book[]>();

    fetchBooks() {
        return this.httpClient.get('https://bookog-24420.firebaseio.com/book-data-'
            + this.userDataStorageService.getCurrentUser()
            + '.json')
            .map(
                (response: any) => {
                    if (response != null) {
                        console.log(response);
                        for (const key of Object.keys(response)) {
                            console.log(key);
                            this.books.push(response[key]);
                        }
                        this.sortBooksById();
                    }
                }
            );
    }

    saveBook(book: Book) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/book-data-'
            + this.userDataStorageService.getCurrentUser()
            + '.json'
            , book)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    saveBooks(newResponse: any) {
        return this.httpClient.put('https://bookog-24420.firebaseio.com/book-data-'
            + this.userDataStorageService.getCurrentUser()
            + '.json'
            , newResponse)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    deleteBook(bookID: string) {
        const tempBook = [];
        for (const book of this.books) {
            if (book.bookID === bookID) {
                continue;
            }
            tempBook.push(book);
        }
        this.books = tempBook;
        return this.httpClient.get('https://bookog-24420.firebaseio.com/book-data-'
            + this.userDataStorageService.getCurrentUser()
            + '.json')
            .map(
                (response: any) => {
                    if (response != null) {
                        console.log(response);
                        for (const key of Object.keys(response)) {
                            console.log(key);
                            if (response[key].bookID === bookID) {
                                delete response[key];
                            }
                        }
                    }
                    return response;
                }
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    this.saveBooks(response);
                    this.booksChanged.next();
                }
            );
    }

    getRecentBooks() {
        if (this.books == null) {
            return null;
        } else if (this.books.length <= 3) {
            return this.books;
        } else {
            return this.books.slice(0, 3);
        }
    }

    getNumberOfBooksRead() {
        if (this.books == null) {
            return 0;
        }
        return this.books.length;
    }

    getAllBooksRead() {
        return this.books;
    }

    addNewBook(newBook: Book) {
        this.books.unshift(newBook);
        this.saveBook(newBook);
    }

    getNextId() {
        if (this.books == null) {
            return 'boo0';
        }
        return 'boo' + (this.books.length + 1);
    }

    sortBooksById() {
        this.books.sort(
            (a, b) => {
                if (a.bookID > b.bookID) { return -1; }
                if (a.bookID < b.bookID) { return 1; }
                return 0;
            }
        );
        console.log(this.books);
    }

    resetBooks() {
        this.books = [];
    }
}
