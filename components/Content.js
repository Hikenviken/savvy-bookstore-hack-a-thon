import Book from "./Book";

const buildBooksHTML = (state) => {
    let booksHTML = '';
    state.books.forEach(book => booksHTML += `${Book(book)}`);
    return booksHTML;
    };

export default (states) => `${buildBooksHTML(states)}`;
