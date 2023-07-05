function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
console.dir(boxes)

const btnCreate = document.querySelector('button[data-create]');
btnCreate.addEventListener('click', onClick)

function onClick() {
    let amount = document.querySelector('input[type="number"]').value;
    createBoxes(amount);
};
  
const btnDestroy = document.querySelector('button[data-destroy]');
btnDestroy.addEventListener('click', onDestrioy);

function onDestrioy() {
  document.querySelector('input[type="number"]').value = '';
  boxes.innerHTML = '';
}

let step = 1;
const min = 1;
const max = 100;

function createBoxes(amount) {
  if ((amount < min) || (amount > max)) {
    return alert('Please enter the correct quantity');
  }
  else {
    let size = 20;
    for (let i = 0; i <= amount-1; i += step){
      size += 10;
    const element = document.createElement('div');
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.background = getRandomHexColor();
      boxes.append(element);
   };
  }
};

