// export default function(state){
// return `
// <nav>
   

function generateNavHTML(links){
  
    let NavHTML = '<ul>';
  

    links.forEach(function(link){
        NavHTML += `<li>${link}</li>`;
    });

    NavHTML += '</ul>';
    
  return NavHTML;
}
export default function(state){
    return `
  <nav>
          ${generateNavHTML(state.navigation)}
  </nav>
  `;
}

