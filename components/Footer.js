export default function(state) {
  return `<footer>&copy;2019 - ${state.title[0]} - <ul><li>${state.navigation[0]}</li><li>${state.navigation[1]}</li></ul></footer>`;
}
