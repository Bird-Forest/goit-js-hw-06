function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let hexColor = [getRandomHexColor()];

const boxes = document.querySelector('#boxes');
console.dir(boxes)

const btnCreate = document.querySelector('button[data-create]');
console.dir(btnCreate);

// Функція коллбек виводить число, яке введено в інпуті
// результат цієї функції є аргументом для function createBoxes
const onClick = ()  => {
  let amount = document.querySelector('input[type="number"]').value;
  console.log(amount);
};

btnCreate.addEventListener('click', onClick)

// Функція. яка приймає коллбек як аргумент amount
function createBoxes(amount) {
  //  onClick()
  let step = 0;
  
    for (let i = 0; i <= amount; i += 1){
    step += 30;
    const element = document.createElement('div');
      element.style.width = `${step}px`;
      element.style.height = `${step}px`;
      element.style.background = hexColor;
      boxes.append(element);
    console.log(element);
  };
 
};

createBoxes(2);

