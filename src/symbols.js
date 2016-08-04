// Symbols are not supported in browsers, so you need polyfill

let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log(symbol === symbol2); // false



let symbol = Symbol.for('name');
let symbol2 = Symbol.for('name');

console.log(symbol === symbol2); // true



let user = {
	username: 'r2d2';
	[Symbol.for('password')]: 'c3po';
};

console.log(user.password); // undefined
console.log(Object.keys(user)); // ["username"]
console.log(Object.getOwnPropertyNames(user)); // ["username"]

let password = user[Symbol.for('password')];
console.log(password); // c3po

console.log(Object.getOwnPropertySymbols(user)); // Symbol(password)