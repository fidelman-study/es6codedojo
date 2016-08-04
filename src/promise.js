function applyForVisa(documens, resolve, reject) {
	console.log('Обработка заявления...');
	setTimeout(function() {
		Math.random() > .5 ? resolve({}) : reject('Причина');
	}, 2000);
}

function bookHotel() {}

function buyTicket() {}

applyForVisa({}, function(visa){
	console.info('Visa получена');
	bookHotel(visa, function(reservation) {
		buyTicket(reservation, function() {

		}, function() {

		})
	}, function(error) {

	});

}, function(reason) {
	console.error(reason);
});

/////-------------ES6

function applyForVisa(documents) {
	console.log('Обработка заявления...');
	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			Math.random() > .5 ? resolve({}) : reject('Причина');
		}, 2000);
	});
	return promise;
}

let getVisa = visa => {
	console.info('Visa получена');
	return new Promise(function(resolve, reject) {
		setTimeout(() => resolve(visa), 2000);
	});
}

let bookHotel = visa => {
	console.log('Отель забронирован');
	console.log(visa);
	return new Promise(resolve, reject) { // Promise.resolve(visa) Promise.reject('Нет')
		resolve({});
	});
};

let buyTicket = booking => {
	console.log('Билеты куплены');
	console.log('Бронь', booking);
};

applyForVisa({})
	.then(getVisa)
	.then(bookHotel)
	.then(buyTicket)
	.catch(error => console.error(error));

//-------------------------------------------------------


// There are not promises in IE so we need to download babel polyfill


let movielist = document.getElementById('movies');

function addMovieToList(movie) {
	let img = document.createElement('img');
	img.src = movie.Poster;
	movielist.appendChild(img);
}

function getData(url, done) {
	return new Promise(function(resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			if (xhr.status === 200) {
				let json = JSON.parse(xhr.response);
				resolve(json.Search);
			} else {
				reject(xhr.statusText);
			}
		};
		xhr.onerror = function(error) {
			reject(error);
		};

		xhr.send();
	});
}

let search = 'spider man';

getData(`http://www.omdbapi/?s=${search}`)
	.then(movies => movies.forEach(movie => addMovieToList(movie)));
	.catch(error => console.error(error));



function go(num) {
	return new Promise(function(resolve, reject) {
		let delay = Math.ceil(Math.random() * 3000);
		console.log(num, delay);
		setTimeout(() => {
			if (delay > 2000) {
				reject(num);
			} else {
				resolve(num);
			}
		}, delay);
	});
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.all([p1, p2, p3]) 
//all - выполнить все обещания по порядку
//race - выполнить все обещания по скорости
	.then(value => console.log(value));


let superman = getData(`http://www.omdbapi/?s=superman`);

// superman
// 	.then(movies => movies.forEach(movie => addMovieToList(movie)));
// 	.catch(error => console.error(error));

let batman = getData(`http://www.omdbapi/?s=batman`);

// batman
// 	.then(movies => movies.forEach(movie => addMovieToList(movie)));
// 	.catch(error => console.error(error));


Promise.race([superman, batman])
	.then(movies => movies.forEach(movie => addMovieToList(movie)));
	.catch(error => console.error(error));























