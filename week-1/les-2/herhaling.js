const brand = "Ford"; //String
const model = "Mondeo"; //String
const year = 1993; //Number
const isCar = true; //Boolean

let x; //Undefined

console.log(model + " is een auto van " + brand);
console.log("---------------");
console.log("deze is gemaakt in het jaar " + year);

console.log(`
${model} is een auto van ${brand}
---------------------------------
deze is gemaakt in het jaar ${year}
`);


const isArabic = false; //Boolean
const isFrench = true; //Boolean

//voorbeeld 1 
if (isArabic === true) {
    console.log("Jij spreekt Arabisch");
} 

// !== wil zeggen "niet gelijk aan"
if (isFrench !== true) {
    console.log("Jij spreekt geen Frans!");
}

//voorbeeld 2
if (isArabic === true) {
    console.log("Spreekt Arabisch")
} else {
    console.log("Spreekt geen Arabisch")
}



