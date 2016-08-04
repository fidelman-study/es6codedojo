let firstName = 'Bill',
	lastName = 'Gates',
	email = 'billgates@microsoft.com';

let personES5 = {

	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello: function() {
		console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
	}

};

Object.defineProperty(personES5, 'fullName', {
	get: function() {
		return this.firstName + ' ' + this.lastName;
	},
	set: function(value) {
		this.firstName = value;
	}
});


let myemail = 'email';
let sayMethod = 'sayGoodbye';

let personES6 = {
	firstName,
	lastName,
	[myemail]: email,
	sayHello() {
		return `Hi my name is ${this.firstName} ${this.lastName}`;
	},
	[sayMethod]() {
		return `Good Bye`;
	},
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(value) {
		this.firstName = value;
	}

};

document.getElementById('object_getObj').onclick = function() {
	console.log(personES6);
};

document.getElementById('object_greet').onclick = function() {
	console.log(personES6.sayHello());
};
document.getElementById('object_bye').onclick = function() {
	console.log(personES6.sayGoodbye());
};

document.getElementById('object_setname').onclick = function() {
	let name = document.getElementById('object_name').value;
	personES6.fullName = name;
	alert(`Name was changed to ${name}`);
};
document.getElementById('object_showfullname').onclick = function() {
	console.log(personES6.fullName);
};







