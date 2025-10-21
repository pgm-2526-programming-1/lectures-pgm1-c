// condities (= statement dat waar of niet waar is)
console.log(10 > 2); // true
console.log(10 >= 10) // true
console.log(10 < 2) //false
console.log(10 === 10) //true
console.log(10 !== 10) // false

const result = 10 > 2;
console.log(`De waarde is ${result}`);

console.log("Samet" === "Samet"); //true
const name = "Aya"
console.log(name === "Samet") //false
console.log(name !== "Samet") // true
console.log(name === "Aya") // true

const isTuesday = true;

if (isTuesday === true) {
    console.log("Het is vandaag Dinsdag");
} else {
    console.log("Het is vandaag NIET dinsdag");
}

console.log("---------------------------------");

// && -> AND ( Beide condities moeten waar)
// || -> OR (1 van de 2 moet waar zijn)
// ! -> NOT (omgekeerde waarde)


const day = "zondag";
const temperature = 24;

// if (day === "zaterdag" && temperature > 25) {
//     console.log("We gaan naar de zee")
// } else {
//     console.log("Je mag niet")
// }

if (day === "zondag" || temperature > 25) {
     console.log("We gaan naar de zee")
} else {
    console.log("Je mag niet")
}

