// dont use like a constructor
// with them we cannot use bind, call, apply methods

function add(x, y) {
	return x + y;
}
add(2, 2);

let add = (x, y) => x + y;
add(2, 2);



let square = function (x) {
	return x * x;
};
square(2);

let square = x => x * x;
square(2);



let giveMeAnswer = function() {
	return 42;
};
giveMeAnswer();


let giveMeAnswer = () => 42;
giveMeAnswer();



let log = function() {
	console.log('Hi');
};
log();


let log = () => console.log('Hi');
log();



let multiply = function(x, y) {
	let result = x * y;
	return result;
};

// it's necessary curly braces and the return if it has 1+ rows
let multiply = (x, y) => {
	let result = x * y;
	return result;
}



let getPerson = function() {
	return { name: 'Bill' };
};

// if we have an object literal it cereates a collision with curly bracers, in this case we wrap it into bracers
let getPerson = () => ({ name: 'Bill' });


// IIFE - immediatly involve function expression
(function(){
	console.log('IIFE');
})();


(() => console.log('IIFE'))();



// ----------------------------

let numbers = [1, 2, 4, 5];

let sum = 0;

numbers.forEach(function(num){
	sum += num;
});

numbers.forEach((num) => sum += num);

console.log(sum);



let squared = numbers.map(function(n) {
	return n * n;
});

let squared = numbers.map( n => n * n);



let person = {
	name: 'Bob',
	greet: function() {
		var that = this;
		setTimeout(function() {
			console.log(`Hello, mu name is {$that.name}`);
		}, 2000);
	}
};

let person = {
	name: 'Bob',
	greet: () => {
		let that = this; // required, `cause the keyword this in an arrow function is window object.
		console.log(`Hello, my name is {$that.name}`);
	}
}

let person = {
	name: 'Bob',
	greet() {
		// In this case it is not necesseary to use closures
		setTimeout(() => {
			console.log(`Hello, my name is {$this.name}`);
		}, 2000);
		
	}
}

















