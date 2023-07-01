const inputName = document.querySelector('#name-input');

const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInput);

function onInput(evt) {
    let getName = inputName.value;
    spanName.textContent = getName;
}