import Book from "./Book";

function (books) {
    return books.map(book => `${Book(book)}`)
    };

export default (state) => `${buildBooks(state.books)}`;
