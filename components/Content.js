import Book from "./Book";

function buildBooks(books) {
    return books.map(book => `${Book(book)}`)
};

export default (state) => `${buildBooks(state.books)}`;
