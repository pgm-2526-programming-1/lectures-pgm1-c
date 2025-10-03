/* Logical operators

&& (AND) -> Beide voorwaarden moeten true zijn
||(OR) -> 1 van de voorwaarden is true
! (Not) -> omgekeerde waarde

*/

// AND operator
const age = 22; //number
const hasLicense = false //boolean

if (age >= 18 && hasLicense === true) {
    console.log("Je mag autorijden.")
} else {
    console.log("Mag niet rijden.")
}

// OR Operator - ||
const hasCoat = false;
const hasUmbrella = false;

if (hasCoat || hasUmbrella) {
    console.log("Je bent klaar voor het belgisch weer! yay! joy!");
} else {
    console.log("Prepare to be wet!")
}

// NOT operator
const hasPassed = false;

if (!hasPassed) {
    console.log("Je bent niet geslaagd")
} else {
    console.log("Je bent geslaagd");
}

//Mixed operators
const age2 = 18;
const hasLicense2 = false; 
const hasCar = true;

if ((age2 >= 18 && hasLicense2 === true) || hasCar) {
    console.log("Je mag autorijden.");
} else {
    console.log("Je mag niet rijden");
}

/* Uitleg 2x '=' vs 3x '=' */

// if (3 === '3') {
//     console.log("1");
// } else {
//     console.log("2");
// }

if (5 == "5") {
    console.log("1");
} else {
    console.log("2");
}