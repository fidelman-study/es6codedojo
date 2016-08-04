'use strict';

var _fullName, _fullName2, _personES, _mutatorMap;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var personES5 = {

	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello: function sayHello() {
		console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
	}

};

Object.defineProperty(personES5, 'fullName', {
	get: function get() {
		return this.firstName + ' ' + this.lastName;
	},
	set: function set(value) {
		this.firstName = value;
	}
});

var myemail = 'email';
var sayMethod = 'sayGoodbye';

var personES6 = (_personES = {
	firstName: firstName,
	lastName: lastName
}, _defineProperty(_personES, myemail, email), _defineProperty(_personES, 'sayHello', function sayHello() {
	return 'Hi my name is ' + this.firstName + ' ' + this.lastName;
}), _defineProperty(_personES, sayMethod, function () {
	return 'Good Bye';
}), _fullName = 'fullName', _mutatorMap = {}, _mutatorMap[_fullName] = _mutatorMap[_fullName] || {}, _mutatorMap[_fullName].get = function () {
	return this.firstName + ' ' + this.lastName;
}, _fullName2 = 'fullName', _mutatorMap[_fullName2] = _mutatorMap[_fullName2] || {}, _mutatorMap[_fullName2].set = function (value) {
	this.firstName = value;
}, _defineEnumerableProperties(_personES, _mutatorMap), _personES);

document.getElementById('object_getObj').onclick = function () {
	console.log(personES6);
};

document.getElementById('object_greet').onclick = function () {
	console.log(personES6.sayHello());
};
document.getElementById('object_bye').onclick = function () {
	console.log(personES6.sayGoodbye());
};

document.getElementById('object_setname').onclick = function () {
	var name = document.getElementById('object_name').value;
	personES6.fullName = name;
	alert('Name was changed to ' + name);
};
document.getElementById('object_showfullname').onclick = function () {
	console.log(personES6.fullName);
};