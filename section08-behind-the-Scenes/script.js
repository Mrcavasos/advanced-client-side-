"use strict";
/*
function calcAge(birthYear) {
	const age = 2024 - birthYear;

	function printAge() {
		let output = `${firstName},you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			// Creating New variable with same names as outer scope's variable
			const firstName = "Steven";

			// Reassigning outer scope's variable
			const output = "NEW OUTPUT!";

			const str = `Oh, and your're a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		//console.log(str);
		console.log(millenial);
		//console.log(add(2,3));
		console.log(output);
	}
	printAge();
	return age;
}

const firstName = "Jonas";
calcAge(1994);
//console.log(age);
// printAge();

// Hoisting and TDZ in Practice

// Variables
console.log(me);
//console.log(job);
//console.log(Year);

var me = "Jonas";
let job = "teacher";
const year = "1994";

// Functions
console.log(addDec1(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow);
//console.log(addArrow(2, 3));

function addDec1(a, b) {
	return a + b;
}

var addExpr = function (a, b) {
	return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// The THIS keyword

console.log(this);

const calcAge = function (birthYear) {
	console.log(2024 - birthYear);
	//console.log(this);
};

calcAge(1994);

const calcAgeArrow = (birthYear) => {
	console.log(2024 - birthYear);
	//console.log(this);
};

calcAgeArrow(1994);

const jonas = {
	year: 1994,
	calcAge: function () {
		console.log(this);
		console.log(2037 - this.year);
	},
};
jonas.calcAge();

const matilda = {
	year: 2017,
};
// object borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();


// Regular Functions vs Arrow Functions
// var firstName = "matilda";
const jonas = {
	firstName: "Jonas",
	year: 1994,
	calcAge: function () {
		//console.log(this);
		console.log(2024 - this.year);
		// SOLUTION 1
		// const self = this; // self or that
		// const isMillenial = function () {
		// 	console.log(self);
		// 	console.log(self.year >= 1981 && this.year <= 1996);
		// };

		// SOLUTION 2

		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(`Hey ${this.firstName}`);
	},
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
	console.log(arguments);
	return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);


var addArrow = (a, b) => {
	console.log(arguments);
	return a + b;
};
addArrow(2, 5, 8);


// Primitives VS Objects

let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

const me = {
	name: "Tony",
	age: 30,
};

const friend = me;
friend.age = 27;
console.log("friend:", friend);
console.log("Me", me);
*/

// Primitaive Types
let lastName = "Williams";
let oldLastName = "lastName";
lastName = "Davis";

console.log(lastName, oldLastName);
// Reference types
const jessica = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// Copying objects

const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,

	family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
