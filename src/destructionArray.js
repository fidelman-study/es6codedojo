let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

let js = languages[0];
let php = languages[1];
let py = languages[2];
let pb = languages[3];


//let js, php, py, rb;
let [js, php, py, rb] = languages;




let scores = [3, 4, 5];

let [low, , high] = scores;

let [low, ...rest] = scores; // ...rest - is array includes the rest values



let scores = [3, 4];

let [low, mid, high = 5] = scores;



let scores = [3, 4, [5, 6]];

let [low, mid, [high, higher]] = scores;



function computeScore([low, mid]) {
	console.log(low, mid);
}

computeScore([3, 4]);



function getScores() {
	return [3, 4, 5];
}

let [low, mid, high] = getScores();



let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];



