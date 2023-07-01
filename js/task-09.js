function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
btnColor.addEventListener(('click'), onColor);

const spanColor = document.querySelector('.color');

function onColor(evt) {
  let hexColor = [getRandomHexColor ()]
  document.body.style.background = hexColor
  spanColor.textContent = hexColor
}
