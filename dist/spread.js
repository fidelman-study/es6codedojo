'use strict';

// spread array's values

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['C#', 'Python'], dynamicLanguages);

document.getElementById('spread_lang').onclick = function () {
	console.log(languages);
};

function getSumm(x, y, z) {
	return x + y + z;
}

var numbers = [1, 2, 3];

document.getElementById('spread_add').onclick = function () {

	console.log(getSumm.apply(undefined, numbers));
};