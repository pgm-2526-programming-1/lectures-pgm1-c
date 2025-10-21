const person = {
    name: "Kobe",
    age: 19,
    address: {
        city: "Brussel",
        street: "Straat 20"
    }

}; //Object

console.log(person.name + " woont in " + person.city)
console.log(`${person.name} woont in ${person.city}`);

//Kobe
person.postalCode = "9000";
person.city = "Gent"
console.log(person.address.street)



