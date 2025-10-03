
//alle datatypes kan door elkaar
const items = ["Lidl", 100, true, "Aldi"];

//Length
console.log(supermarkets.length);
console.log(supermarkets[3]);
console.log(supermarkets[supermarkets.length - 1]);

//elementen toevoegen
const supermarkets = ["Delhaize", "Lidl", "Carrefour", "Aldi"];
supermarkets.push("Jumbo");
console.log(supermarkets);

// supermarkets[0] = "Colruyt";
// console.log(supermarkets);

//Array overlopen met for (For .. of)
let text = "";
for (const supermarket of supermarkets) {
    text = text + `${supermarket}\n`;
}

console.log(`
Mijn favoriete supermarkten:
${text}
`)

