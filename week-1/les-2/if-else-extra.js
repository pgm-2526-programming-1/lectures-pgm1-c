const currentCourse = "Web1";

// if (currentCourse === "Programming 1") {
//     console.log("Het vak is nu prog 1")
// } else {
//     console.log("Het vak is nu niet prog 1 maar " + currentCourse);
// }

console.log(currentCourse);
console.log(currentCourse === "Programming 1");
console.log(3 > 2);

//Logical  Operators

// && (AND) -> Beide voorwaarden true zijn
// || (OR) -> 1 van de voorwaarden is true
// ! (NOT) -> Omgekeerde waarde

const age = 24;
const hasLicense = false;

if (age >= 18 || hasLicense === true) {
    console.log("Deze persoon mag met de auto rijden.");
} else {
    console.log("Deze persoon mag NIET met de auto rijden");
}

if (!hasLicense) {
    console.log("Geen rijbewijs");
}

