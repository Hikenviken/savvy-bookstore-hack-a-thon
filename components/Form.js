export default state => `
<form action="#">
  <span>
    <label for="name">Book Title</label>
    <input type="text" id="name" name="title" placeholder="Book Title" />
  </span>
  <span>
    <label for="author">Author</label>
    <input type="text" id="author" name="creator" placeholder="Author" />
  </span>
  <div>
    <label for="pictureURL">URL</label>
    <input
      type="url"
      name="image"
      id="pictureURL"
      placeholder="https://example.com"
      pattern="https://.*"
      size="30"
      required
    />
  </div>
  <div>
    <label for="price">Price</label>
    <input type="number" id="price" name="price" placeholder="Price" />
  </div>

  <div>
    <label for="sellingPoints">Selling Points</label>
    <textarea
      name="selling_points"
      id="sellingPoints"
      cols="30"
      rows="10"
    ></textarea>
  </div>

  <div>
    <input type="radio" id="book" name="type" value="book">
    <label for="book">Book</label>
  </div>

  <div>
    <input type="radio" id="album" name="type" value="album">
    <label for="album">Album</label>
  </div>

  <div>
      <input type="submit" value="Submit!"/>
  </div>
</form>
`;
