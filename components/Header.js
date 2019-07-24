export default function(state) {

  let levels = '<header>';

  state.header.forEach(function(genHeader,index) {
    levels += `<h${index+1}>${genHeader}</h${index+1}>`
  });

  return `${levels}</header>`;
}
