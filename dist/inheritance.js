'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task() {
		var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

		_classCallCheck(this, Task);

		this._title = title;
		this._done = false;
		Task.count++;
	}

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this._done = true;
			console.log('The task ' + this.title + ' has done');
		}
	}, {
		key: 'title',
		get: function get() {
			return this._title;
		},
		set: function set(value) {
			if (value !== undefined && typeof value === 'boolean') {
				this._done = value;
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

Task.count = 0;

var SubTask = function (_Task) {
	_inherits(SubTask, _Task);

	// SubTask inherits Task

	// There's no constructor, so this class will use the parent class constructor

	function SubTask() {
		var title = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

		_classCallCheck(this, SubTask);

		// the child constructor must call the parent constructor
		return _possibleConstructorReturn(this, Object.getPrototypeOf(SubTask).call(this, title)); // calls the parent class constructor
	}

	_createClass(SubTask, [{
		key: 'complete',
		value: function complete() {
			// rewrite the existing class

			_get(Object.getPrototypeOf(SubTask.prototype), 'complete', this).call(this); // call the parent method to not break the rule DRY (Don't Repeat Yourself).
			console.log('The subtask ' + this.title + ' has done');
		}
	}]);

	return SubTask;
}(Task);

var task = new Task('������� JS');
var subtask = new SubTask('������� ES6');