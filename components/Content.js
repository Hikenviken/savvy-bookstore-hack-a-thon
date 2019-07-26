
function generateBookHTML(books){
    let listHTML = '';

    books.forEach(function bookIterator(book){
        listHTML += `
    <div class="card">
        <ul>
            <li>${book.name}</li>
            <li>${book.author}</li>
            <li><img src=${book.pictureUrl} class="pic"/></li>
            <li>${book.price}</li>
            <li>${book.sellingPoints}</li>
        </ul>
    </div>`;
    });

    return listHTML;
}


export default function(state){
    return  `
    <div class="flexbox">
    ${generateBookHTML(state.books)}
    </div>
    `;
}

