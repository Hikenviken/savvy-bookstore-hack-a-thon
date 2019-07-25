function generateNav(links) {
  let listHTML = '<ul>';

  links.forEach(function(link) {
     listHTML += `<li>${link}</li>`
  });

  listHTML += '</ul>'

  return listHTML;
}


export default function(state) {
  return `<footer>&copy;2019 - ${state.title[0]} - ${generateNav(state.navigation)}</footer>`;
}
