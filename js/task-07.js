const fontSize = document.querySelector('#font-size-control');

const textSpan = document.querySelector('#text');

fontSize.addEventListener('input', onInput);

function onInput(evt) {
	let step = document.querySelector('#font-size-control').value;
	 textSpan.style.fontSize = `${step}px`;
}
