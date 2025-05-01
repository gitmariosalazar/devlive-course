/*
A new system is underway in a bookstore to streamline book inventory management, covering tasks such as adding new books, updating existing information, and furnishing customers with book details.

Your assignment is to develop an object representing each book, complete with essential attributes like title, author, publication year, page count, and price. Additionally, include a method to seamlessly print book details in the console. Additionally, construct a "read-book" object equipped with a method to input book information via the console, generating a fully formed book object.

To complete the system, create a menu function that lets the users execute key actions: creating a new book, printing book details, and exiting the program.
*/

const prompt = require('prompt-sync')();

export class Book {
  title: string;
  author: string;
  year: number;
  pages: number;
  price: number;

  constructor(
    title: string,
    author: string,
    year: number,
    pages: number,
    price: number
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.price = price;
  }

  print(): string {
    return `Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nPages: ${this.pages}\nPrice: ${this.price}`;
  }
}

export class BookStore {
  books: Book[];
  constructor() {
    this.books = [];
  }

  findBook(title: string): Book | null {
    for (let book of this.books) {
      if (book.title === title) {
        return book;
      }
    }
    return null;
  }

  addBook(book: Book): string {
    if (!this.findBook(book.title)) {
      this.books.push(book);
      return `Book added successfully!`;
    }
    return `Book already exist!`;
  }

  deleteBook(title: string): string {
    if (this.findBook(title)) {
      this.books = this.books.filter((item) => item.title !== title);
      return `Delete book successfully!`;
    }
    return `Book not found!`;
  }

  updateBook(bookUpdate: Book): string {
    for (let book of this.books) {
      if (book.title === bookUpdate.title) {
        Object.assign(book, bookUpdate);
        return `Book update successfully`;
      }
    }
    return `Book not found!`;
  }

  menuUsersActions(): void {
    let option: number = parseInt(prompt(`Enter a option: `));
    while (option > 0 && option < 6) {
      switch (option) {
        case 1:
          console.log(`Add\n\n`);
          const titleAdd: string = prompt(`Enter the title book: `);
          const authorAdd: string = prompt(`Enter author's name: `);
          const yearAdd: number = parseInt(prompt(`Enter the year book: `));
          const pagesAdd: number = parseInt(
            prompt(`Enter the numbers pages: `)
          );
          const priceAdd: number = parseInt(prompt(`Enter price's book: `));
          console.log(
            this.addBook(
              new Book(titleAdd, authorAdd, yearAdd, pagesAdd, priceAdd)
            )
          );
          break;
        case 2:
          console.log(`Update\n\n`);
          const title: string = prompt(`Enter the title book: `);
          const author: string = prompt(`Enter author's name: `);
          const year: number = parseInt(prompt(`Enter the year book: `));
          const pages: number = parseInt(prompt(`Enter the numbers pages: `));
          const price: number = parseInt(prompt(`Enter price's book: `));
          console.log(
            this.updateBook(new Book(title, author, year, pages, price))
          );
          break;
        case 3:
          const titleDelete: string = prompt(`Enter the title's book: `);
          console.log(`Delete\n\n`);
          console.log(this.deleteBook(titleDelete));
          break;
        case 4:
          console.log(`Search Book`);
          const titleSearch: string = prompt(`Type your title's book: `);
          const book: Book | null = this.findBook(titleSearch);
          if (book) {
            console.log(book.print());
          } else {
            console.log(`Book not found`);
          }
          break;
        case 5:
          console.log(`List Books`);
          console.log(this.books);
          break;
        default:
          console.log(`Error`);
          break;
      }
      option = parseInt(prompt(`Enter a option: `));
    }
    console.log(`Bye!`);
  }
}

const bookStore: BookStore = new BookStore();
bookStore.menuUsersActions();
