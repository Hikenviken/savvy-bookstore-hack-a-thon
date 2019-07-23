export default function(state) {
  return `
  <form action=" " method = "POST">
    <label for="name" >NAME: </label>
    <input type="text"  name="name"/>
  
  <label for="author" >AUTHOR: </label>
    <input type="text" name="author" />
  
  <label for="pictureUrl" >PICTURE URL: </label>
    <input type="url" name="pictureUrl"/>
  
  <label for="price" >PRICE: </label>
    <input type="number" name="price"/>
  
<label for="sellingPoints" >SELLING POINTS: </label>
  <textarea name="sellingPoints"></textarea>
  </form>
`
}
