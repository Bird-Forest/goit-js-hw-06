const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const li = document.createElement('li')
const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

console.log(markup);

list.innerHTML = markup;