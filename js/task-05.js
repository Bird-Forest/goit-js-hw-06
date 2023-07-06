const inputName = document.querySelector('#name-input');

const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInput);

function onInput() {
    if (inputName.value !== '') {
        spanName.textContent = inputName.value.trim();
    } else {
        spanName.textContent = 'Anonymous';
    };
};