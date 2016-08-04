// spread array's values

let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', 'Python', ...dynamicLanguages];

document.getElementById('spread_lang').onclick = function() {
	console.log(languages);
};

function getSumm(x, y, z) {
	return x + y + z;
}

let numbers = [1, 2, 3];

document.getElementById('spread_add').onclick = function () {

	console.log(getSumm(...numbers));
};