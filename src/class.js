// if we have more then one constructor it will be the mistake
// if we have no the constructor, JS will create the empty constructor
// no hoisting

class Task { // typeof function

	constructor(title = Task.getDefaultTitle()) { // all properties must be in the constructor

		this.title = title; // public prop
		this._done = false; // private prop
		Task.count++;
	}
	// bind prop and method
	get done() {
		return (this._done) ? 'Задача выполнена' : 'Задача не выполнена';
	}

	set done(value) {
		if (value !== undefined && typeof value === 'boolean') {
			this._done = value;
		} else {
			console.error('It is not a boolean');
		}
	}

	complete() {
		this._done = true;
	}

	static getDefaultTitle() {
		return 'Задача';
	}


}

Task.count = 8; // static property - for the class


let task = new Task('Убрать комнату');