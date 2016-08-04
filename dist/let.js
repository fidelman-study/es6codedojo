'use strict';

// let is observide into block of braces {}
// hoisting doesnt influence on let

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
	buttons[i].innerHTML = i;
	buttons[i].onclick = function () {
		console.log(i);
	};
};

for (var i = buttons.length - 1; i >= 0; i--) {
	_loop(i);
};