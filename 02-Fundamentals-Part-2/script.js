/*// activating strict mode 
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I cam drive :D");

//const interface = "audio";

//const private = 534;



//             functions
function logger() {
	console.log("My name is Tony");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

const num = Number(23);


// Function declarations vs expressions

// function declaration

// call call the function before you define it ONLY IF NEEDED

function calcAge1(birthYear) {
	return 2024 - birthYear;
}
const age1 = calcAge1(1994);

// function expression

const calAge2 = function (birthYear) {
	return 2024 - birthYear;
};

const age2 = calAge2(1994);

console.log(age1, age2);


// ARROW FUNCTIONS

const calAge3 = (birthYear) => 2024 - birthYear;
const age3 = calAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2024 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1994, "Tony"));
console.log(yearsUntilRetirement(1984, "Bob"));


// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} piece of  apples and ${orangePieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor(2, 3));


// REVIEWING FUNCTIONS
const calAge = function (birthYear) {
	return 2024 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years!`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1994, "Tony"));
console.log(yearsUntilRetirement(1950, "Bill"));


// Code along challenge

const calcAverage = (a, b, c) => (a + b + c) / 3;

// test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins}) vs ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log("No team wins!!!");
	}
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner();

// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ['Bob' , 'Alice']

const firstName = "Tony";
const Tony = ["Tony", "Cavasos", 2037 - 1991, "teacher"];
console.log(Tony);
console.log(Tony.length);

//
const calAge = function (birthYear) {
	return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
console.log(ages);


// basic array operations (Methods)

// ADD elements
const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
	console.log("You have a friend called steve");
}

// challenge Tip calculator #2

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => (Bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 441];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// Objects

const tony = {
	firstName: "Tony",
	lastName: "Cavasos",
	age: 2024 - 1994,
	job: "Orderfiller",
	friends: ["Brody", "Berto", "Chris"],
};

console.log(tony);

console.log(tony.lastName);
console.log(tony.lastName);
