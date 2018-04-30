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
                        return response[Object.keys(response)[0]];
                    }
                }
            );
    }

    saveBooks() {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/book-data-7rJQbiIYVmeUeCntyFqUUUmcTW' + '.json'
            , this.getAllBooksRead())
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
            return this.books.slice(this.books.length - 3, this.books.length).reverse();
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
        this.books.push(newBook);
        // this.setBooksInCache(this.books);
        this.saveBooks();
    }

    getNextId() {
        if (this.books == null) {
            return 'boo0';
        }
        return 'boo' + (this.books.length + 1);
    }

}
