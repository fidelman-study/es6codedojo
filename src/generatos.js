function generate () {
	console.log('Start');
	console.log('Finish');
}

generate();



function* generate() {
	console.log('Start');
	yield;
	yield 1;
	yield 2;
	console.log('Finish');
}

let iterator = generate();
iterator.next(); // Start, Object {value: undefined, false}
iterator.next(); // Object {value: 1, false}
iterator.next(); // Object {value: 2, false}
iterator.next(); // Finish, Object {value: undefined, true}


function generate() {
	let current = 1;
	console.log('Start');
	return {
		[Symbol.iterator]() {
			return {
				next() {
					let result = {value: undefined, done: true};

					if(current <= 3) {
						result.value = current;
						result.done = false;
						current++;
					} else {
						console.log('Finish');
					}

					return result;
				}
			};
		}
	};
}

let iterator = generate()[Symbol.iterator]();
iterator.next(); // Start, Object {value: undefined, false}
iterator.next(); // Object {value: 1, false}
iterator.next(); // Object {value: 2, false}
iterator.next(); // Finish, Object {value: undefined, true}



function* range(start, end) {
	let current = start;
	while(current <= end) {
		yield current++;
	}
}

for(let num of range(1,10)) {
	console.log(num);
}

//----------------------------------------


function* generator() {
	let result = 1 + (yield);
	console.log(`Result: ${result}`);
}

let iterator = generator();
console.log(iterator.next()); // generator starts - {velue: undefined, done: false}
console.log(iterator.next(1)); // Relust: 2, {velue: undefined, done: false}






function* generateArray() {
	yield* [1, 2, 3];
}

function* generator() {
	yield 42;
	yield* generateArray();
	yield 43;
}

let iterator = generator();
console.log(iterator.next().value); // 42
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 43






function* generator() {
	try {
		yield 1;
		yield 2;
		yield 3;
	}
	catch(e) {
		console.log(e)
	}
	yield 1;
	yield 2;
	yield 3;
}

let iterator = generator();
console.log(iterator.next()); // {velue: 1, done: false}
console.log(iterator.return()); // {velue: undefined, done: true}
console.log(iterator.throw(new Error ('Error'))); // Uncaught Error: Error













