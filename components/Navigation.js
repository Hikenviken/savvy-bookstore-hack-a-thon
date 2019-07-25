// export default function(state){
// return `
// <nav>
   

function generateNavHTML(links){
  
    let navHTML = '<ul>';
  
    links.forEach(function(link){
        navHTML += `<li>${link}</li>`;
    });

    navHTML += '</ul>';
    
  return navHTML;
}

export default function(state){
    return `
  <nav>
          ${generateNavHTML(state.navigation)}
  </nav>
  `;
}

