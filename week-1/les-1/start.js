console.log("Hallo, Arda!");
console.log("Welkom bij PGM!");

//Dit is een commentaar regel
let name = "Justin"; //String

console.log("Hallo "+ name);
console.log("Hoe gaat het " + name + "?");

name = "Lotte";

console.log("hallo " + name);

let age = 24; //number
let isHuman = true; //boolean

console.log("Meneer/Mevrouw " + name + " is " + age + "jaar oud.");
console.log(`Meneer/Mevrouw ${name} is ${age} jaar oud.`); //Template string

// -----------------------------

let name2;
console.log(name2); //Undefined
name2 = "Ignace";
console.log(name2);

// --------

let day = 26;
console.log("Vandaag is het " + day + " September.");

const tomorrow = day + 1;
console.log("Morgen is het " + tomorrow + " September.");

const yesterday = day - 1;
console.log("Gisteren was het " + yesterday + " September.");

let number1 = 10;
let number2 = 13;


console.log(number1 / number2);

// ---------------------------

//kebab case
// const the-day-tomorrow = day + 1;

//snake case
// const the_day_tomorrow = day + 1;

//Pascal case
// const TheDayTomorrow = day + 1;

//camelCase  -> wij gebruiken dit!
const theDayTomorrow = day + 1; 