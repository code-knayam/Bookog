import { Book } from '../shared/book.model';

export class DataStorageService {

    books: Book[] = [
        {
            bookID: 'b001',
            bookTitle: 'Book 1',
            bookAuthor: 'Author 1',
            bookRating: 4,
            bookPages: 300,
            bookTimestamp: new Date(),
            bookImageURL: 'assets/thumbnail_book_item.jpg'
        }
    ];

    getRecentBooks() {
        return this.books;
    }

    getTopBooks() {
        return this.books;
    }

    getBooksRead() {
     return this.books.length;
    }
}
