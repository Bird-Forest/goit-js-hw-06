const fontSize = document.querySelector('#font-size-control');

const textSpan = document.querySelector('#text');

fontSize.addEventListener('input', onInput);

function onInput(evt) {
	let step = document.querySelector('#font-size-control').value;
	 textSpan.style.fontSize = `${step}px`;
}


// function fun1() {
// 	var rng=document.getElementById('r1'); //rng - это Input
// 	var p=document.getElementById('one'); // p - абзац
// 	p.innerHTML=rng.value;
// }

// document.querySelector('.inpput-1').addEventListener('input', () => {
// 	let  data = document.querySelector('.input-1').value;
// 	document.querySelector('.out-5').innerHTML = data;
// });
// fontSize.style.size = `${step}px`;
