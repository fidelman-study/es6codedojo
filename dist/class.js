'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// if we have more then one constructor it will be the mistake
// if we have no the constructor, JS will create the empty constructor
// no hoisting

var Task = function () {
	// typeof function

	function Task() {
		var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

		_classCallCheck(this, Task);

		// all properties must be in the constructor

		this.title = title; // public prop
		this._done = false; // private prop
		Task.count++;
	}
	// bind prop and method


	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this._done = true;
		}
	}, {
		key: 'done',
		get: function get() {
			return this._done ? '������ ���������' : '������ �� ���������';
		},
		set: function set(value) {
			if (value !== undefined && typeof value === 'boolean') {
				this._done = value;
			} else {
				console.error('It is not a boolean');
			}
		}
	}], [{
		key: 'getDefaultTitle',
		value: function getDefaultTitle() {
			return '������';
		}
	}]);

	return Task;
}();

Task.count = 8; // static property - for the class

var task = new Task('������ �������');