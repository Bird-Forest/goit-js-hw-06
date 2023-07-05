const fontSize = document.querySelector('#font-size-control');

const textSpan = document.querySelector('#text');

fontSize.addEventListener('input', onInput);

function onInput() {
	textSpan.style.fontSize = `${fontSize.value}px`;
}

onInput();
