export default (state) => `
<form action="#">
  <span>
    <label for="name">Book Title</label>
    <input type="text" id="name" placeholder="Book Title" />
  </span>
  <span>
    <label for="author">Author</label>
    <input type="text" id="author" placeholder="Author" />
  </span>
  <div>
    <label for="picture-url">URL</label>
    <input
      type="url"
      id="picture-url"
      placeholder="https://example.com"
      pattern="https://.*"
      size="30"
      required
    />
  </div>
  <div>
    <label for="price">Price</label>
    <input type="number" id="price" placeholder="Price" />
  </div>
  <div>
    <label for="selling-points"> Add Three Selling Points Separated Using Commas, <br> It'll Behoove You to Do so </label>
    <textarea
      id="selling-points"
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <div>
      <input type="submit" value="Submit!"/>
  </div>
</form>
`;
