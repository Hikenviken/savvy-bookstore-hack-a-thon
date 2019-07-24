export default function(state) {
  return `
  <form action=" " method = "POST">
    <label for="name" >NAME: </label>
    <input type="text" id="name" name="name"/>

  <label for="author" >AUTHOR: </label>
    <input type="text" id="author" name="author" />

  <label for="pictureUrl" >PICTURE URL: </label>
    <input type="url" id="pictureUrl" name="pictureUrl"/>

  <label for="price" >PRICE: </label>
    <input type="number" id="price" name="price"/>

<label for="sellingPoints" >SELLING POINTS: </label>
  <textarea name="sellingPoints" id="sellingPoints" ></textarea>
  </form>
`
}
