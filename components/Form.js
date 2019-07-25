export default function(state) {
  return `
  <form action=" " method = "POST">
    <label for="name" >name: </label>
    <input type="text" id="name" name="name"/>

  <label for="author" >author: </label>
    <input type="text" id="author" name="author" />

  <label for="pictureUrl" >picture url: </label>
    <input type="url" id="pictureUrl" name="pictureUrl"/>

  <label for="price" >price: </label>
    <input type="number" id="price" name="price"/>

<label for="sellingPoints" >selling points: </label>
  <textarea name="sellingPoints" id="sellingPoints" ></textarea>
  <input type="submit" id="submit" name="addBook" value="submit" />
  <input type="reset" id="clear" name="clear form" value="clear form" />
  </form>
`
}
