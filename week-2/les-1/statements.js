const number = 10 //number
let number2; //undefined

if (number > 10) {
    console.log("Het getal is groter dan 10");
} else if (number < 10) {
    console.log("Het getal is kleiner dan 10");
} else {
    console.log("Het getal is gelijk aan 10");
}

//Switch

const day = 4;

switch (day) {
    case 1:
        console.log("Maandag");
        break;
    case 2:
        console.log("Dinsdag");
        break;
    case 3:
        console.log("Woensdag");
        break;
    case 5:
        console.log("Vrijdag");
        break;
    default:
        console.log("Weekend");
}

const fruit = "orange"

switch (fruit) {
    case "apple":
        console.log("I like apples");
        break;
    case "banaan":
        console.log("I like bananas");
        break;
    case "orange":
        console.log("I like oranges");
        break;
    case "turtles":
        console.log("I like turtles!")
        break;
    default:
        console.log(`the fruit ${fruit} is not in my list`)
}