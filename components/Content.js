
 function generateBookHTML(books) {
  let listHTML = '<ul>';
  books.forEach(function(book) {
    listHTML += `<div class="card"><li>${book.name}</li>
    <li>${book.author}</li>
    <li><img src=${book.pictureUrl}/></li>
    <li>${book.price}</li>
    <li>${book.sellingPoints}</li></div>`

  });
  return listHTML;

}


export default function(state){
console.log(state.books)
return generateBookHTML(state.books);
}

