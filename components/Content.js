import Book from "./Book";

const buildBooksHTML = (state) => {
    let booksHTML = '';
    state.books.forEach(book => booksHTML += `<figure>${Book(book)}</figure>`);
    return booksHTML;
    };

export default (states) => `${buildBooksHTML(states)}`;
