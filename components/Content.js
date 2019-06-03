import Product from "./Product";

function buildProducts(products) {
    return products.map(product => `${Product(product)}`)
};

export default (state) => `${buildProducts(state.products[state.active])}`;
