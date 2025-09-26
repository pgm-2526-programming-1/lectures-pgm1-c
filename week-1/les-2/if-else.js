const score = 65; //Number (score op 100)

// === -> is gelijk aan
// !== -> niet gelijk aan
// >= -> groter dan of gelijk aan
// <= -> Kleiner dan of gelijk aan 


if (score >= 50) {
    //hier gebeurt iets als score hoger is dan 50
    console.log("Je bent geslaagd!");
} else {
    //Hier komt code als lager dan 50
    console.log("Je bent niet geslaagd!");
}

const temperature = 0; //altijd van hoog naar laag in if-else

if (temperature >= 25) {
    console.log("Het is heet");
} else if (temperature >= 19) {
    console.log("Het is warm");
} else if (temperature >= 15) {
    console.log("Het is gemiddeld");
} else if (temperature > 0) {
    console.log("Het is koud");
} else {
    console.log("het vriest");
}


//---------------------------------
let x = Math.floor(Math.random() * 10);

console.log("x = ", x);

if (x < 5) {
    console.log("x is kleiner dan 5");
} else {
    console.log("x is groter of gelijk aan 5");
}
