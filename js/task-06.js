const inputSymbol = document.querySelector('#validation-input');

inputSymbol.addEventListener('focus', onFocus);
inputSymbol.addEventListener('blur', onBlur);

function onFocus(evt) {
    inputSymbol.classList.add('validation-input')
}

function onBlur(evt) {
    const inputUser = evt.currentTarget.value
    if (!(inputUser.length === +inputSymbol.dataset.length)) {
        inputSymbol.classList.add('invalid')
    } else {
        inputSymbol.classList.remove('invalid')
        inputSymbol.classList.add('valid')
    } 
};

