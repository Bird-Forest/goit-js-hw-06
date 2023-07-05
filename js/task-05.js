const inputName = document.querySelector('#name-input');

const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInput);

function onInput() {
    spanName.textContent = inputName.value.trim();
    inputName.placeholder = 'Anonymous';

}