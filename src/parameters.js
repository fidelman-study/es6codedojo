function greet(greeting = 'Hello', name = 'Friend') {
	return `${greeting} ${name}`;
}
document.getElementById('parameters_greet').onclick = function() {
	console.log(greet('Hi'));
};


function sumEs5() {

	var sum = 0;

	Array.prototype.forEach.call(arguments, function(value) {
		sum += value;
	});

	return sum;

}

function sum(...values) {

	return values.reduce(function(previous, current) {
		return previous + current;
	});
}


document.getElementById('parameters_sum').onclick = function() {
	console.log(sum(1,2,3,4,5,6,7,8,9));
};