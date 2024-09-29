"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const fs = __importStar(require("fs"));
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach((book) => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Year: ${book.publishedYear}, Available: ${book.availability}`);
        });
    }
    searchBooks(key, value) {
        return this.books.filter((book) => book[key] === value);
    }
    updateBook(id, updatedFields) {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updatedFields);
        }
    }
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    getBookState(book) {
        return book.availability ? "available" : "checkedOut";
    }
    // Method to save books to a JSON file
    saveToFile(filename) {
        fs.writeFileSync(filename, JSON.stringify(this.books, null, 2));
        console.log(`Books saved to ${filename}`);
    }
    // Method to load books from a JSON file
    loadFromFile(filename) {
        if (fs.existsSync(filename)) {
            const data = fs.readFileSync(filename, "utf8");
            this.books = JSON.parse(data);
            console.log(`Books loaded from ${filename}`);
        }
        else {
            console.log(`File ${filename} does not exist.`);
        }
    }
}
exports.Library = Library;
