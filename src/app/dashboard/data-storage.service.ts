import { Book } from '../shared/book.model';

export class DataStorageService {

    books: Book[] = [
        new Book(
            'boo1',
            'Book 1',
            'Author 1',
            3,
            400,
            new Date(),
            'assets/thumbnail_book_item.jpg'
        ),
        new Book(
            'boo2',
            'Book 2',
            'Author 2',
            3,
            400,
            new Date(),
            'assets/thumbnail_book_item.jpg'
        ),
        new Book(
            'boo3',
            'Book 3',
            'Author 3',
            3,
            400,
            new Date(),
            'assets/thumbnail_book_item.jpg'
        ),
        new Book(
            'boo4',
            'Book 4',
            'Author 4',
            3,
            400,
            new Date(),
            'assets/thumbnail_book_item.jpg'
        ),
        new Book(
            'boo5',
            'Book 5',
            'Author 5',
            3,
            400,
            new Date(),
            'assets/thumbnail_book_item.jpg'
        )
    ];

    getRecentBooks() {
        return this.books.slice(0, 3);
    }

    getTopBooks() {
        return this.books;
    }

    getNumberOfBooksRead() {
        return this.books.length;
    }

    getAllBooksRead() {
        return this.books;
    }

    addNewBook( newBook: Book) {
        this.books.push( newBook );
    }

    getNextId() {
        return 'boo' + ( this.books.length + 1) ;
    }

}
