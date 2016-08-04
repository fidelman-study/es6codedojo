class Task {

	constructor(title = Task.getDefaultTitle()) {
		this._title = title;
		this._done = false;
		Task.count++;
	}

	complete() {
		this._done = true;
		console.log(`The task ${this.title} has done`);
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (value !== undefined && typeof value === 'boolean') {
			this._done = value;
		}
	}

	static getDefaultTitle() {
		return 'Задача';
	}


}	

Task.count = 0;

class SubTask extends Task{ // SubTask inherits Task

	// There's no constructor, so this class will use the parent class constructor

	constructor(title = '') { // the child constructor must call the parent constructor
		super(title); // calls the parent class constructor
	}

	complete() { // rewrite the existing class

		super.complete(); // call the parent method to not break the rule DRY (Don't Repeat Yourself).
		console.log(`The subtask ${this.title} has done`);

	}


}





let task = new Task('Изучить JS');
let subtask = new SubTask('Изучить ES6');
