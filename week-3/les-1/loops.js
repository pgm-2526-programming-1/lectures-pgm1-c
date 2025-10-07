const games = ["Pokemon", "League of Legends", "Cyberpunk 2077", "God of War 3"];

//for..of loop
for (const game of games) {
    console.log(`Game: ${game}`);
}

//forEach
games.forEach(function (game, index){
    console.log(`Game ${index + 1}: ${game}`)
})

