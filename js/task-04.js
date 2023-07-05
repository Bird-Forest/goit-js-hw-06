const btnDescr = document.querySelector('button[data-action="decrement"]');
btnDescr.addEventListener('click', decrementClick);

const btnIncr = document.querySelector('button[data-action="increment"]');
btnIncr.addEventListener('click', incrementClick);

const spanValue = document.querySelector('#value');

let counterValue = 0;

function decrementClick() { 
    counterValue -= 1;
    spanValue.textContent = counterValue;
}

function incrementClick() {
    counterValue += 1;
    spanValue.textContent = counterValue;
}

