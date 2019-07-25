import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';


function render(state){
    document.querySelector('#root').innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Form(state)}
      ${Footer(state)}
    `;
}

const states = {
  'navigation': [ 'Books', 'Albums' ],
    'title': [ 'The Pentagon', 'We sell classified books' ],
    'books': [
        {
            'id': 1,
            'name': 'Lasagna: A Retrospective',
            'author': 'Garfield',
            'pictureUrl': 'https://lh3.googleusercontent.com/_V0CoK16CILc/TYtNtXtKUVI/AAAAAAAAJkM/IueuDjFz2Rk/w1200-h630-p-k-no-nu/%E8%8C%84%E5%AD%90%E8%82%89%E9%86%AC%E5%8D%83%E5%B1%A4%E6%89%B9%20Beef%20and%20Eggplant%20Lasagna01.jpg',
            'price': 24,
            'sellingPoints': [
                'Lasagna is delicious.',
                'The essential guide to Italian casseroles of all types.',
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },

        {
            'id': 2,
            'name': 'Looking for JJ',
            'author': 'Anne Cassidy',
            'pictureUrl': 'http://ecx.images-amazon.com/images/I/41NK-%2BZOW2L._SL500_AA300_.jpg',
            'price': 45,
            'sellingPoints': [
                "It's fair to say that Looking for JJ is a book that will haunt you.",
                'TReally very interesting. Quite tense and very dark!',
                'I chosed this book because i thought it would look kinda good to read and read something new to read too. so i said why not.'
            ]
        },

        {
            'id': 3,
            'name': 'The Alchemist',
            'author': 'Paulo Coelho',
            'pictureUrl': 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.buyoye.pk%2Fwp-content%2Fuploads%2F2017%2F04%2FThe-Alchemist-by-Paulo-Coelho.jpg&f=1',
            'price': 24,
            'sellingPoints': [
                "My wrist deserve a shout out, 'I'm like what up wrist?' My stove deserve a shout out, 'I'm like what up stove",
                'Amazing book, good read',
                'Moms Spaghetti'
            ]
        },

        {
            'id': 4,
            'name': 'Tearing Down the Wall of Sound: The Rise and Fall of Phil Spector',
            'author': 'Mick Brown',
            'pictureUrl': 'https://img.huffingtonpost.com/asset/5988b0111400001f00ecf8d9.jpeg?cache=bv2dgjc1xj&ops=crop_6_25_1165_1182,scalefit_720_noupscale',
            'price': 14.21,
            'sellingPoints': [
                'Lasagna is delicious.This is a rip roaring read about Phil Spector the genius producer famous for his wall of sound and who made himself more famous than his artists who when he started out was a bit ego -centric',
                "I loved the chapters about the creation of the Wall of Sound and Phil's big hits and famous failures, and the anecdotes detailing the music culture of the '60s and '70s.",
                'Wowee wow wow! -Chris Walken'
            ]
        }
    ]}

render(states);

const formData =  document.querySelector('form');

formData.addEventListener('submit', (event) => {

  event.preventDefault();
  const data = event.target.elements;

  // New Book Object to push into array of book objects
  const newBook = {
    name : data[0].value,
    author : data[1].value,
    pictureUrl : data[2].value,
    price : data[3].value,
    // sellingPoints :
    }
  states.books.push(newBook);
  render(states);
  });

const navItems = document.querySelectorAll('nav li');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click' , function clickHandler(event){
        event.preventDefault();
    });
});
