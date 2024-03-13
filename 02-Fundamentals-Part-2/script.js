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


 // Objects

const tony = {
	firstName: "Tony",
	lastName: "Cavasos",
	age: 2024 - 1994,
	job: "Orderfiller",
	friends: ["Brody", "Berto", "Chris"],
};

console.log(tony);

// dot vs bracket notation

console.log(tony.lastName);
console.log(tony["lastName"]);

const nameKey = "Name";

console.log(tony["first + nameKey"]);
console.log(tony["last" + nameKey]);

//console.log(tony.lastName);

const interestedIn = prompt(
	"What do you want to know about Tony? Choose between firstName, lastName, age, job, and friends",
);

if (tony[interestedIn]) {
	console.log(tony[interestedIn]);
} else {
	console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

tony.location = "Portugal";
tony["twitter"] = "@tonycavasos";
console.log(tony);

// Challenge
// "Jonas has 3 friends, and his best friend is called Brody"

console.log(
	`${tony.firstName} has ${tony.friends.length}, and his best friend is called ${tony.friends[0]} `,
);

	
 // Object methods

const tony = {
	firstName: "Tony",
	lastName: "Cavasos",
	birthYear: 1994,
	job: "Orderfiller",
	friends: ["Brody", "Berto", "Chris"],
	hasDriversLicense: true,

	//	calcAge: function (birthYear) {
	//		return 2024 - birthYear;
	//	}

	//	calcAge: function () {
	//		console.log(this);
	//		return 2024 - this.birthYear;
	//	}
	// challenge
	// "Tony is a 30-year old orderfiller, and he has a drivers license"

	calcAge: function () {
		this.age = 2024 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} -year old ${tony.job}, and he has ${
			this.hasDriversLicense ? "a" : "no"
		} driver's license.`;
	},
};

console.log(tony.calcAge());

console.log(tony.age);
console.log(tony.age);
console.log(tony.age);

console.log(tony.getSummary());

// challenge objects

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`,
	);
} else if (john.bmi > mark.bmi) {
	console.log(
		`${john.fullName}'s BMI (${john.bmi})is higher than ${mark.fullName}'s BMI (${mark.bmi})`,
	);
}


// Iteration: The for Loop

console.log("Lifting weights repetition 1 ");
console.log("Lifting weights repetition 2 ");
console.log("Lifting weights repetition 3 ");
console.log("Lifting weights repetition 4 ");
console.log("Lifting weights repetition 5 ");
console.log("Lifting weights repetition 6 ");
console.log("Lifting weights repetition 7 ");
console.log("Lifting weights repetition 8 ");
console.log("Lifting weights repetition 9 ");
console.log("Lifting weights repetition 10 ");

// for loop keeps running while condition is True
for (let rep = 1; rep <= 20; rep++) {
	console.log(`lifting weights repetition ${rep}`);
}

// looping arrays, Breaking and continuing

const tony = [
	"Tony",
	"Cavasos",
	2024 - 1994,
	"Order-filler",
	["Brody", "Berto", "Chris"],
];

const types = [];
// console.log(tony[0])
// console.log(tony[1])
//....
// console.log(tony[4])

// tony[5] does NOT exist
for (let i = 0; i < tony.length; i++) {
	//reading from tony array
	console.log(tony[i], typeof tony[i]);

	// Filling types array
	// types[i] = typeof tony [i];
	types.push(typeof tony[i]);
}

console.log(types);
// IMPORTANT SNIPPET OF CODE !!!
const years = [1981, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2024 - years[i]);
}
console.log(ages);

console.log("------ ONLY STRINGS ------");
for (let i = 0; i < tony.length; i++) {
	if (typeof tony[i] !== "string") continue;

	console.log(tony[i], typeof tony[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < tony.length; i++) {
	if (typeof tony[i] === "number") break;

	console.log(tony[i], typeof tony[i]);
}

// looping backwards and loops in loops

const tony = [
	"Tony",
	"Cavasos",
	2024 - 1994,
	"Order-filler",
	["Brody", "Berto", "Chris"],
];

// 0, 1, ...., 4
// 4, 3, ...., 0  backwards

for (let i = tony.length - 1; i >= 0; i--) {
	console.log(i, tony[i]);
}

// loop inside of a loop

for (let exercise = 1; exercise <= 4; exercise++) {
	console.log(` ---------------- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(` Exercise ${exercise}: lifting weights repetition ${rep}`);
	}
}


// THE WHILE LOOP

// for (let rep = 1; rep < 6; rep++) {
// 	console.log(`lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
	console.log(`WHILE: lifting weights repetition ${rep}`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (!dice === 6) console.log("Loop is about to end....");
}
*/

// challenge

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
	return sum / arr.length;
};

console.log(calAverage[(2, 3, 6)]);
console.log(calAverage(totals));
console.log(calAverage(tips));
