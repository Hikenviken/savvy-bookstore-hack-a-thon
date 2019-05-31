function buildSPHTML(sellingPoints) {
    return sellingPoints.map(point => `<li>${point}</li>`).join("");
}

export default (product) => `
    <img src=${product.image} alt="Photo wuz here">
    <p>${product.title} - ${product.creator} - ${product.price}</p>
    <ul>
        ${buildSPHTML(product.selling_points)}
    </ul>
`;

