function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let hexColor = [getRandomHexColor()];

const boxes = document.querySelector('#boxes');
const boxElements = [];

const btnCreate = document.querySelector('button[data-create]');
btnCreate.addEventListener('click', onClick);

function onClick(evt) {
 console.log(evt.currentTarget.previousElementSibling.value)
};

let step = 30;

function createBoxes(amount) {
  amount(onClick);
  const elemDiv = document.createElement('div');
  elemDiv.classList.add('size');
  elemDiv.style.background = hexColor;
  boxElements.push(elemDiv);

  if (Number(amount) > 1) {
    step += 30;
    elemDiv.style.width = `${30}px`;
    elemDiv.style.height = `${30}px`;
    boxElements.push(elemDiv);
  }
  boxes.innerHTML = boxElements;
}











// const number = document.querySelector('input[type="number"]');
// console.dir(number);



// document.querySelector('button[data-create]').addEventListener('click', () => {
//   let number = +document.querySelector('inpun[type="number"]').value;
//   document.querySelector
// })






// const boxes = document.querySelector('#boxes');
// console.dir(boxes);
// const boxElements = [];
// const elemDiv = '<div class="size"></div>';

// function createBoxes(amount) {
//   let hexColor = [getRandomHexColor ()]
//   document.elemDiv.style.background = hexColor
// }






// const elemDiv = boxElements.map((elemeht) => '<div class="size"></div>').join('');
// boxes.innerHTML = elemDiv;
// console.log(boxElements);
