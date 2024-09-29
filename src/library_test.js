"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const Book_1 = require("./Book");
const myLibrary = new library_1.Library();
// Adding books
myLibrary.addBook({
    id: 1,
    title: "Book One",
    author: "Author A",
    genre: Book_1.Genre.Fiction,
    publishedYear: 2020,
    availability: true,
});
myLibrary.addBook({
    id: 2,
    title: "Book Two",
    author: "Author B",
    genre: Book_1.Genre.NonFiction,
    publishedYear: 2019,
    availability: false,
});
// Save to file
myLibrary.saveToFile("books.json");
// Create a new library instance and load from file
const newLibrary = new library_1.Library();
newLibrary.loadFromFile("books.json");
// List books to confirm loading
newLibrary.listBooks();
