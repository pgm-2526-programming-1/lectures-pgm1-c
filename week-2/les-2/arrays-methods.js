// Push() en pop()

let fruits = ["apple", "banaan", "orange"];
fruits.push("kiwi"); // voegt een element toe aan het einde
console.log(fruits);

let lastFruit = fruits.pop(); //Verwijdert het laatste element
console.log(fruits);
console.log(lastFruit);

//------------------------------------------

//unshift() en shift()

let numbers = [17, 14, 11, 8];
numbers.unshift(0);
console.log(numbers);

let firstNumber = numbers.shift() // verwijdert het element op het begin [0]
console.log(numbers);
console.log(firstNumber);

// ---------------------------------------------

//split() en join()

let sentence = "Ik hou van de Jumbo, ofzo";
let words = sentence.split(" ");
console.log(words);

let newSentence = words.join(" ");
console.log(newSentence);

// ----------------------------------------------

//slice() en splice()
let animals = ["Turtle", "Parrot", "Cat", "Dog", "Shark"];

//slice
let fewAnimals = animals.slice(1, 4);
console.log(fewAnimals);

//splice
animals.splice(1, 2, "Fish", "Bunny");
console.log(animals);