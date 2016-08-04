'use strict';

var obj = ['hello', 'how are you'];

function getArrayKeys(obj) {

	var array = [];

	for (var i in obj) {
		array.push(i);
	}

	return array;
}
document.getElementById('forof_keys').onclick = function () {
	console.log(getArrayKeys(obj));
};

function getArrayValues(obj) {

	var array = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			array.push(i);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return array;
}
document.getElementById('forof_values').onclick = function () {
	console.log(getArrayValues(obj));
};