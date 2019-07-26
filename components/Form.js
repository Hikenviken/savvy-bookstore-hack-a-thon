export default function(){
    return `<form action=" " method="POST">
  <label for="name">Name: </label>
  <input type="text" id="name" name="name" />

  <label for="author">Author: </label>
  <input type="text" id="author" name="author" />

  <label for="pictureUrl">Picture URL: </label>
  <input type="url" id="pictureUrl" name="pictureUrl" />

  <label for="price">Price: </label>
  <input type="number" id="price" name="price" />

  <label for="sellingPoints">Selling Points: </label>
  <textarea name="sellingPoints" id="sellingPoints"></textarea>

  <input type="submit" id="submit" />
  <input type="reset" id="clear" />
</form>
`;
}
