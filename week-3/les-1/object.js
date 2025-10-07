const name = "Assassin's Creed"; //string
const publisher = "EA Games"; //string
const releaseYear = 2006; //number
const characters = ["Niels", "Ignace", "Kobe"]; //Array
const isViolent = true; //Boolean

//leeg object
const object = {};

const game = {
    name: "Assassin's Creed",
    publisher: "EA Games",
    releaseYear: 2006,
    characters: ["Niels", "Ignace", "Kobe"],
    isViolent: true
}

// console.log(game);
// console.log(game.name);
// console.log(game.publisher);
// console.log(game.releaseYear);
// console.log(game.characters[2]);

// console.log(`Het spel ${game.name} is uitgebracht in ${game.releaseYear} en bevat een character genaamd ${game.characters[1]} die violent is.`)

// game.ageRestriction = 16;
// console.log(game);

// game.publisher = "EA Studios";
// console.log(game);

// console.log(game.name);
// console.log(game["name"]);

// for
for (const prop in game) {
    // console.log(prop);
    console.log(game[prop]);
}

//object in object
const club = {
    name: "Club Brugge",
    stadium: {
        name: "Jan Breydelstadion",
        street: "Koning Leopold III-laan 50",
        postalCode: "8200",
        city: "Brugge"
    }
};

console.log(club.stadium.name);

club.player = {
    name: "Arne"
}

console.log(club.player.name);



