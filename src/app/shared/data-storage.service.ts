import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../shared/book.model';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient) { }

    private books = [];

    fetchBooks() {
        return this.httpClient.get('https://bookog-24420.firebaseio.com/book-data-7rJQbiIYVmeUeCntyFqUUUmcTW' + '.json')
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

    saveBooks(book: Book) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/book-data-7rJQbiIYVmeUeCntyFqUUUmcTW' + '.json'
            , book)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    setBooksInCache(book: Book) {
        localStorage.setItem('books', JSON.stringify(book));
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

    getTopBooks() {
        return this.books;
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
        // this.setBooksInCache(this.books);
        this.saveBooks(newBook);
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
