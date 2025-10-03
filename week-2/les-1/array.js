//Array
const colors = ["red", "green", "orange", "purple"]; //strings
const numbers = [1, 5, 10, 9, 15];

console.log(colors[1]); // Geeft het 2de element terug van de array -> Beginnen altijd bij 0
console.log(numbers.length) //Geeft de lengte van een array terug -> 5 elementen in numbers
console.log(numbers[2]); 
colors.push("pink"); // Voegt een element toe aan de array (Laatste element)
console.log(colors);
colors.pop();
console.log(colors);
// colors.push(true); //hoeft niet enkel string te zijn in dit geval
// console.log(colors);

//Een array start dus altijd op de index 0!

//Loops
for (const color of colors) {
    console.log(color);
}

const word = "Artevelde";
for (const letter of word) {
    console.log(letter);
}