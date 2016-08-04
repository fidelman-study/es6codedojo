// let is observide into block of braces {}
// hoisting doesnt influence on let

var buttons = document.querySelectorAll('button');

for (let i = buttons.length - 1; i >= 0; i--) {
	buttons[i].innerHTML = i;
	buttons[i].onclick = function() {
		console.log(i);
	};
};