function buildSPHtml(sellingPoints) {
    return sellingPoints.map(point => `<li>${point}</li>`).join("");
}

export default (state) => `
    <img src=${state.pictureUrl} alt="Photo wuz here">
    <p>${state.name} - ${state.author} - ${state.price}</p>
    <ul>
        ${buildSPHtml(state.sellingPoints)}
    </ul>
`;
