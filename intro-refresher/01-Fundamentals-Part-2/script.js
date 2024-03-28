/*let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// DATA TYPES

// changing data types by assigning different value to variable
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let const and var

let age = 30;
age = 31;

const birthYear = 1991;

// birthYear = 1991
// const job;

var job = "programmer";
job = "teacher";

lastName = "Cavasos";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tony";
const lastName = "Cavasos";
console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5;
x += 10; // x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// strings an template literals

const firstName = "Tony";
const job = "orderfiller";
const birthYear = 1994;
const year = 2024;

const Tony =
	" I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Tony);


// challenge

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
	console.log(`Johns BMI(${BMIJohn}) is greater than Marks! `);
} else {
	console.log(`Marks BMI(${BMIMark}) is greater than Johns! `);
}

//type conversion

const inputYear = 1994;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tony"));
console.log(typeof NaN);

console.log(String(30), 30);

// TYPE coercion

console.log(`I am ` + 30 + ` years old`);
console.log("23" - "10" - "3");
console.log("23" / "2");

let n = "1";
n = n - 1;
console.log(n);


// 5 falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Tony"));
console.log(Boolean(""));

const money = 1;

if (money) {
	console.log("Don't spend it all");
} else {
	console.log("You should get a job");
}

let height;
if (height) {
	console.lo("YAY! Hight is defined");
} else {
	console.log("Height is UNDEFINED");
}


// Equality operators == vs ===

const age = "18";
//strict === means its value and Data type

if (age === 18);
console.log("You just became an adult(strict)");

// loose equality operators are the same value but not same data type try to always use strict default to ===

if (age == 18);
console.log("You just became an adult(loose)");

const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
	console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
	console.log("7 is also a cool number");
} else if (favorite === 9) {
	console.log("9 is also a cool number");
} else {
	console.log("Number is not 23 or 7 or 9 ");
}

if (favorite !== 23) console.log("Why not 23");


// BASIC BOOLEAN LOGIC : THE AND, OR & NOT OPERATORS LOGICAL OPERATORS

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
	console.log("Sarah is able to drive!");
} else {
	console.log("Someone else should drive....");
}

console.log(shouldDrive);

if (shouldDrive) {
	console.log("Sarah is able to drive!");
} else {
	console.log("Someone else should drive....");
}

// challenge solution

const scoreDolphins = (96 + 108 + 89) / 3;

const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
	console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
	console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
	console.log("Both win the trophy");
}

const scoreDolphins = (97 + 112 + 101) / 3;

const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
	console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
	console.log("Both win the trophy");
}
 


// THE SWITCH STATEMENT

const day = "monday";

switch (day) {
	case "monday": // day === 'monday
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "tuesday":
		console.log("Prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("Write code examples");
		break;
	case "friday":
		console.log("Enjoy the weekend :D");
		break;
	default:
		console.log("Not a valid day!");
}

if (day === "monday") {
	console.log("Plan course structure");
	console.log("Go to coding meetup");
} else if (day === "tuesday") {
	console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
	console.log("Write code examples");
} else if (day === "friday") {
	console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
	console.log("Enjoy the weekdend!");
} else {
	console.log("Not a valid day!");
}


// EXPRESSIONS AND STATEMENTS
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = "wine";
} else {
	drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// tip calculator challenge
// short hand for if an else statements
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
*/
