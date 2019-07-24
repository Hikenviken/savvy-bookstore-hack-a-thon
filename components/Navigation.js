export default function(state){
    return `
  <nav>
    <ul>
      <li>Books</li>
      <li>Albums</li>
    </ul>;
  </nav>
  `;
}

function generateNavHTML(links) {

  console.log(links);
}
export default function(state) {
  return `
  <nav>
          ${generateNavHTML(state.navigation)}
  </nav>
  `;
}

navigation: 