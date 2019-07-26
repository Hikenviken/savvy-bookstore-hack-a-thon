export default function(state){
    let levels = '<header>';

    state.title.forEach(function iterator(genHeader,index){
        levels += `<h${index + 1}>${genHeader}</h${index + 1}>`;
    });

    return `${levels}</header>`;
}
