'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
	return 'Hello ' + name;
}
document.getElementById('template_name').onclick = function () {
	console.log(greet('Andrei'));
};

function greetTemplate(name) {
	return 'Hello ' + name;
}
document.getElementById('template_string').onclick = function () {
	console.log(greetTemplate('Andrei'));
};

function createEmail(to, from, subject, message) {
	return '\n\t\tTo: ' + to + '\n\t\tFrom: ' + from + '\n\t\tSubject: ' + subject + '\n\t\tMessage: ' + message + '\n\t';
}
document.getElementById('template_email').onclick = function () {
	console.log(createEmail('fi93@mail.com', 'google.com', 'Hi Andrei', 'We love you so much!!!'));
};

function add(x, y) {
	return x + ' + ' + y + ' = ' + (+x + +y);
}
document.getElementById('template_addition').onclick = function () {
	console.log(add(43, '53'));
};

var name = 'Andrei';

function getUpperName(literals) {
	for (var _len = arguments.length, variables = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		variables[_key - 1] = arguments[_key];
	}

	return literals[0] + variables[0].toUpperCase();
}

document.getElementById('template_upname').onclick = function () {
	console.log(getUpperName(_templateObject, name));
};