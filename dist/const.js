'use strict';

// cannot change in a code stream
// initialization only once and declaration at once
// Hoisting doesnt influence on const
// we can change the oject because a variable keeps a reference to the object

var PI = 3.14;
document.getElementById('const_pi').onclick = function () {
	console.log('PI - ' + PI);
};

var OBJ = {
	hi: 'hello'
};
document.getElementById('const_obj').onclick = function () {
	console.log('OBJ.hi - ' + OBJ.hi);
};
document.getElementById('const_objchange').onclick = function () {
	OBJ.hi = 'hello world';
	console.log('OBJ.hi - ' + OBJ.hi);
};