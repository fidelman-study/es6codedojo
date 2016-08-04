function greet(name) {
	return 'Hello ' + name;
}
document.getElementById('template_name').onclick = function() {
	console.log(greet('Andrei'));
};


function greetTemplate(name) {
	return `Hello ${name}`;
}
document.getElementById('template_string').onclick = function() {
	console.log(greetTemplate('Andrei'));
};


function createEmail(to, from, subject, message) {
	return `
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	`;
}
document.getElementById('template_email').onclick = function() {
	console.log(createEmail('fi93@mail.com', 'google.com', 'Hi Andrei', 'We love you so much!!!'));
};


function add(x, y) {
	return `${x} + ${y} = ${+x + +y}`
}
document.getElementById('template_addition').onclick = function() {
	console.log(add(43, `53`));
};

let name = 'Andrei';

function getUpperName(literals, ...variables) {
	return literals[0] + variables[0].toUpperCase();
}

document.getElementById('template_upname').onclick = function() {
	console.log(getUpperName`Hello ${name}`);
};
