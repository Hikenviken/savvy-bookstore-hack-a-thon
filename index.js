import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Form from "/components/Form";
import Footer from "./components/Footer";

import axios from "axios";

const root = document.querySelector("#root");

const states = {
  header: {
    title: "Savvy Coders Book Store"
  },
  navigation: {
    links: ["Books", "Albums"]
  },
  products: {
    books: [
      {
        id: 1,
        title: "Lasagna: A Retrospective",
        creator: "Garfield",
        image:
          "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
        price: 24,
        selling_points: [
          "Lasagna is delicious.",
          "The essential guide to Italian casseroles of all types.",
          "Real G's move silent, like Lasagna. -Lil Wayne"
        ]
      }
    ],
    albums: [],
  },
};

function addListeners() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const data = Array.from(event.target.elements).reduce(
      (productData, product) => {
        if (product.name === "sellingPoints") {
          productData.selling_points = product.value.split(",");
        } else if (product.name !== "") {
          productData[product.name] = product.value;
        }

        return productData;
      },
      {}
    );
    states.products[`${data.type}s`].push(data);
    render(states);
  });
}

function render(state) {
  root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Form()}
    ${Footer(state)}
    `;
}

axios // don't forget to npm install this!
  .get("https://api.savvycoders.com/books")
  .then(response => {
    states.products.books = response.data;
    render(states);
    addListeners();
  });

axios // don't forget to npm install this!
  .get("https://api.savvycoders.com/albums")
  .then(response => {
    states.products.albums = response.data;
    render(states);
    addListeners();
  });
