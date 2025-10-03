function sayHello() {
    console.log("Hallo");
}

//Uitvoerende functie
function sayHelloTo(name = "unknown", age = 18) {
    console.log(`Goeiemiddag ${name} die ${age} jaar oud is.`)
}


sayHello();
sayHelloTo();
sayHelloTo("Cedar", 20);
sayHelloTo("Ignace", 18);

console.log("=================")

// return functie -> Functie waarvan je resultaat verwacht
function getHelloPhrase(name) {
    return `Goeiemiddag ${name} vanuit de return functie.`
}

const phrase = getHelloPhrase("Asher");
console.log(phrase);
console.log(getHelloPhrase("Kobe"));

function calculateAge(birthYear) {
    const age = 2025 - birthYear;
    return age;
}


console.log(`De leeftijd is ${calculateAge(2006)}`);
console.log(`De leeftijd is ${calculateAge(1993)}`);
console.log(`De leeftijd is ${calculateAge(2000)}`);

