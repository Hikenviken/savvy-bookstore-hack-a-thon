
 function generateBookHTML(books) {
  let listHTML = '';
  books.forEach(function(book) {
    listHTML += `
    <div class="card">
        <ul>
            <li>${book.name}</li>
            <li>${book.author}</li>
            <li><img src=${book.pictureUrl}/></li>
            <li>${book.price}</li>
            <li>${book.sellingPoints}</li>
        </ul>
    </div>`

  });
  return listHTML;

}


export default function(state){
    return generateBookHTML(state.books);
}

