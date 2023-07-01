const categories = document.querySelector('#categories')
console.dir(`Number of categories: ${categories.children.length}`)

const itemCategories = [...categories.children]
itemCategories.forEach(item => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.childElementCount}`);
});
