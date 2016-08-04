let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.info('for');
for (let index = 0; index < xmen.length; index++) {
	console.log(xmen[index]);
}

console.info('for..in');
for (let key in xmen) {
	console.log(xmen[key]);
}

console.info('forEach');
xmen.forEach(xman => console.log(xman));

console.info('for..of');
for (let xman of xmen) {
	console.log(xman);
}

let iterator = xmen[Symbol.iterator]();

console.log(iterator.next()); // {value: 'Cyclops', done: false}
console.log(iterator.next()); // {value: 'Wolverine', done: false}
console.log(iterator.next()); // {value: 'Rogue', done: false}
console.log(iterator.next()); // {value: 'undefined', done: true}

console.log(iterator.length); // undefined


let next = iterator.next();

while (!next.done) {
	console.log(next.value);
	next = iterator.next();
}

let randomGenerator = {
	generate() {
		return this[Symbol.iterator]();
	},
	[Symbol.iterator]() {
		let count = 0;
		return {
			next() {
				let value =  Math.ceil(Math.random() * 100);
				let done = count > 10;
				count++;
				return {
					value,
					done
				};
			}
		};
	}
};

let random = randomGenerator.generate();
console.log(random.next().value);



class TaskList {
	constructor() {
		this.tasks = [];
	}

	addTasks(...tasks) {
		this.tasks = this.tasks.concat(tasks);
	}
	[Symbol.iterator]() {
		return new ArrayIterator(this.tasks);
	}
}


let taskList = new TaskList;
taskList.addTasks('Изучить JavaScript', 'Изучить ES6', 'Купить продукты');

for (let task of taskList) {
	console.log(task);
}


class ArrayIterator {
	constructor(array) {
		this.array = array.map(item => item).sort();
		this.index = 0;
	}

	next() {
		let result = {value: undefined, done: true};

		if (this.index < this.array.length) {
			this.value = this.array[index];
			this.done = false;
			this.index++;
		}

		return result;
	}
}












