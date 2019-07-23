export default function(state) {
  return `
  <div class="form-stuff">
<label for="book-query" >Book Query</label>
<form action=" " method = "GET" title="book-query">
  <label for="id"  >ID</label>
  <input type="number" name="id" id="1" maxlength="5"
  required />
  <label for="name" >NAME: </label>
  <input type="text"  name="name"/>
  <label for="author" >AUTHOR: </label>
  <input type="text" name="author" />
  <label for="pictureUrl" >PICTURE URL: </label>
  <input type="url" name="pictureUrl"/>
  <label for="price" >PRICE: </label>
  <input type="number" name="price"/>
  <label for="sellingPoints" >SELLING POINTS: </label>
  <textarea name="sellingPoints">

                  </textarea>
  </form>
`
}
