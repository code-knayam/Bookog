export class Book {

    bookID: string;
    bookTitle: string;
    bookAuthor: string;
    bookRating: number;
    bookPages: number;
    bookTimestamp: Date;
    bookImageURL: string;

    constructor(bookID: string,
                bookTitle: string,
                bookAuthor: string,
                bookRating: number,
                bookPages: number,
                bookTimestamp: Date,
                bookImageURL: string) {

                    this.bookID = bookID;
                    this.bookTitle = bookTitle;
                    this.bookAuthor = bookAuthor;
                    this.bookRating = bookRating;
                    this.bookPages = bookPages;
                    this.bookTimestamp = bookTimestamp;
                    this.bookImageURL = bookImageURL;

    }

}
