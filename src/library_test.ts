import { Library } from "./library";
import { Genre } from "./Book";

const myLibrary = new Library();

// Adding books
myLibrary.addBook({
  id: 1,
  title: "Book One",
  author: "Author A",
  genre: Genre.Fiction,
  publishedYear: 2020,
  availability: true,
});
myLibrary.addBook({
  id: 2,
  title: "Book Two",
  author: "Author B",
  genre: Genre.NonFiction,
  publishedYear: 2019,
  availability: false,
});

// Save to file
myLibrary.saveToFile("books.json");

// Create a new library instance and load from file
const newLibrary = new Library();
newLibrary.loadFromFile("books.json");

// List books to confirm loading
newLibrary.listBooks();
