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
        ],
        type: 'book'
      }
    ],
    albums: []
  },
  active: "books"
};

function addListeners() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const newProduct = Array.from(event.target.elements).reduce(
      (productData, formField) => {
        if (formField.name === "selling_points") {
          productData.selling_points = formField.value.split(",");
        } else if (formField.name === 'type' && formField.checked) {
          productData.type = formField.value;
        }
        else if (formField.name !== "" && formField.name !== 'type') {
          productData[formField.name] = formField.value;
        }

        return productData;
      },
      {}
    );

    const pluralizedType = `${newProduct.type}s`

    states.products[pluralizedType].push(newProduct);
    render(states);

    // Push to data
    axios.post(`https://api.savvycoders.com/${pluralizedType}`, newProduct);
  });
}

function render(state) {
  root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Form()}
    ${Footer()}
    `;

  const links = document.querySelectorAll("nav a");
  links.forEach(link =>
    link.addEventListener("click", ev => {
      ev.preventDefault();
      states.active = ev.target.textContent.toLowerCase();
      render(states);
    })
  );
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
    if (states.active === 'albums') {
      render(states);
    }
  });
