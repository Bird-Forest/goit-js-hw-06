const categories = document.querySelectorAll('.item');
console.dir(`Number of categories: ${categories.length}`);

categories.forEach(item => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.childElementCount}`);
});
