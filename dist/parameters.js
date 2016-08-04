'use strict';

function greet() {
	var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
	var name = arguments.length <= 1 || arguments[1] === undefined ? 'Friend' : arguments[1];

	return greeting + ' ' + name;
}
document.getElementById('parameters_greet').onclick = function () {
	console.log(greet('Hi'));
};

function sumEs5() {

	var sum = 0;

	Array.prototype.forEach.call(arguments, function (value) {
		sum += value;
	});

	return sum;
}

function sum() {
	for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
		values[_key] = arguments[_key];
	}

	return values.reduce(function (previous, current) {
		return previous + current;
	});
}

document.getElementById('parameters_sum').onclick = function () {
	console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
};