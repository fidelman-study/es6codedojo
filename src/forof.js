let obj = [
	'hello',
	'how are you'
];


function getArrayKeys(obj) {

	let array = [];

	for(let i in obj) {
		array.push(i);
	}

	return array;
}
document.getElementById('forof_keys').onclick = function() {
	console.log(getArrayKeys(obj));
};

function getArrayValues(obj) {

	let array = [];

	for(let i of obj) {
		array.push(i);
	}

	return array;
}
document.getElementById('forof_values').onclick = function() {
	console.log(getArrayValues(obj));
};