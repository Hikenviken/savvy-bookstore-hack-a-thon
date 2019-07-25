import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function render(state){
    document.querySelector('#root').innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;
}




function buildCardHTML(books) {

  let booksHTML = "";
  books.forEach(function (book) {
    console.log(book)

//  booksHTML +=

 //  return;
})
// export default function(state) {
 //  buildCardHTML(state.books);
}


const states = {
  books: [
    {
      "id": 1,
      "name": "Lasagna: A Retrospective",
      "author": "Garfield",
      "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
      "price": 24,
      "sellingPoints": [
          "Lasagna is delicious.",
          "The essential guide to Italian casseroles of all types.",
          "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
    },

    {
      "id": 2,
      "name": "Looking for JJ",
      "author": "Anne Cassidy",
      "pictureUrl": "http://d202m5krfqbpi5.cloudfront.net/books/1328833113l/1522147.jpg",
      "price": 45,
      "sellingPoints": [
          "It's fair to say that Looking for JJ is a book that will haunt you.",
          "TReally very interesting. Quite tense and very dark!",
          "I chosed this book because i thought it would look kinda good to read and read something new to read too. so i said why not."
      ]
    },

    {
      "id": 3,
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "pictureUrl": "https://n1.sdlcdn.com/imgs/b/y/q/624303691271_1-ed95c.jpg",
      "price": 24,
      "sellingPoints": [
          "My wrist deserve a shout out, 'I'm like what up wrist?' My stove deserve a shout out, 'I'm like what up stove",
          "Amazing book, good read",
          "Moms Spaghetti"
      ]
    },

    {
      "id": 4,
      "name": "Tearing Down the Wall of Sound: The Rise and Fall of Phil Spector",
      "author": "Mick Brown",
      "pictureUrl": "https://img.huffingtonpost.com/asset/5988b0111400001f00ecf8d9.jpeg?cache=bv2dgjc1xj&ops=crop_6_25_1165_1182,scalefit_720_noupscale",
      "price": 14.21,
      "sellingPoints": [
          "This is a rip roaring read about Phil Spector the genius producer famous for his wall of sound and who made himself more famous than his artists who when he started out was a bit ego -centric",
          "I loved the chapters about the creation of the Wall of Sound and Phil's big hits and famous failures, and the anecdotes detailing the music culture of the '60s and '70s.",
          "Wowee wow wow! -Chris Walken"
      ]
    }
  ]
}

 render(states);
