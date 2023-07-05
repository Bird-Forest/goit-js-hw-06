const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
console.dir(ingredientsList);

function addElements(ingredients) {

  for (let i = 0; i < ingredients.length; i+=1) {
    const ingredient = document.createElement('li');
    ingredient.textContent = ingredients[i];
    ingredient.classList.add('item');
    ingredientsList.append(ingredient);
  };
}

addElements(ingredients);

