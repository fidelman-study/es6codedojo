let person = {
	firstName = 'Bill',
	lastName = 'Gates'
};

let firstName = person.firstName;
let lastName = person.lastName;


// variablres name and properties name must be equal
let {firstName, lastName} = person; 
console.log(firstName, lastName);

// if not
let {firstName: first, lastName: last} = person; 
console.log(first, last);

let {firstName, lastName, age = 25} = person; 



let user = {
	firstName: 'Bill',
	lastName: 'Gates',
	social: {
		facebook: 'billgates',
		twitter: 'bgates'
	}
};
// In this case (social:) is used to get twitter and facebook
let {firstName, lastName, social: {facebook, twitter: tw}, age = 25} = user; 
console.log(first, last, facebook, tw, age);



function post(url, {data, data: {firstName, lastName}, cache}}) {
	console.log(url, data, cache, firstName, lastName);
}

let result = post('api/users', {data: user, cache: false});



function getUserInfo() {
	return {
		firstName = 'Bill',
		lastName = 'Gates',
		social : {
			facebook: 'billgates',
			twitter: 'bgates'
		}		
	}
}

let {firstName, lastName, social: {twitter}} = getUserInfo();
