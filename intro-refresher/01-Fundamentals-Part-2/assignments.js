/*
//Values and Variables

const _country = "UnitedStates";
const _continent = "NorthAmerica";
let _population = "355";
const _capitalCity = "Washington Dc";

console.log(_capitalCity);
console.log(_country);
console.log(_continent);
console.log(_population);

//Data Types

// let const and var

const isIsland = false;
//isIsland = true;
let language = "english";

console.log(typeof isIsland);
console.log(typeof _population);
console.log(typeof _country);
console.log(typeof language);

// Basic Operators

console.log(_population / 2);
_population++;
console.log(_population);

console.log(_population > 6);
console.log(_population > 33);

const description1 =
	_country +
	" is in " +
	_continent +
	", and its " +
	_population +
	" million people speak " +
	language +
	".";
console.log(description1);

// strings and template literals

const description = `${_country} is in ${_continent}, and its ${_population} million people speak ${language}`;

console.log(description);

if (_population > 33) {
	console.log(`${_country}'s population is above average`);
} else {
	console.log(`${_country}'s population is ${33 - _population} million below average`);
}

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operators

// LATER: This helps us prevent bugs

// const numNeighbors = Number(
//	prompt("How many neighbor countries does your country have?"),
//);

//if (numNeighbors === 1) {
//	console.log("Only 1 border!");
//} else if (numNeighbors > 1) {
//	console.log("More than 1 border");
//} else {
//	console.log("No borders");
//*}

if (language === "english" && _population < 50 && !isIsland) {
	console.log(`You should live in ${_country}:)`);
} else {
	console.log(`${_country} does not meet your criteria :(`);
}

// The switch Statement

switch (language) {
	case "chinese":
	case "mandarin":
		console.log("MOST number of native speakers!");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "english":
		console.log("Number 4");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}

// The Conditional(Ternary)Operator

console.log(
	`${_country}'s population is ${_population > 33 ? "above" : "below"} average`,
);

// functions

function describeCountry(_country, _population, capitalCity) {
	return `${_country} has ${_population} million people and its capitalCity is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descUnitedStates = describeCountry("UnitedStates", 330, "WashingtonDc");
console.log(descPortugal + " " + descGermany + " " + descUnitedStates);

// Function Declarations vs Expressions

function percentageOfWorld1(_population) {
	return (_population / 7900) * 100;
}

const percentageOfWorld2 = function (_population) {
	return (_population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

//Arrow Functions
const percentageOfWorld3 = (_population) => (_population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3 + " " + percChina3 + " " + percUSA3);

// Functions Calling Other Functions
const describePopulation = function (_country, _population) {
	const percentage = percentageOfWorld1(_population);
	const description = `${_country} has ${_population} million people, which is about ${percentage} % of the world.`;
	console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

// Introduction to Arrays

const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic Array Operations (Methods)

const neighbors = ["UnitedStates", "Mexico", "Canada"];
neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Mexico")) {
	console.log("Probably not a North American country :D");
}

neighbors[neighbors.indexOf("UnitedStates")] = "Land of the Free Home of the Brave ";

console.log(neighbors);
*/
