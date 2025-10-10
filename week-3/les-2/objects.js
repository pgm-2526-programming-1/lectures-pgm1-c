const artists = [
    {
        name: "Chris Brown", 
        genre: "r&b", 
        country: "USA"
    }, 
    {
        name: "Bart Peeters", 
        genre: "folk", 
        country: "Belgium"
    },
    {
        name: "K3",
        genre: "Kindermuziek",
        country: "Belgium"
    }, 
    {
        name: "Tyler Childers", 
        genre: "country", 
        country: "USA"
    }
]

for (const artist of artists) {
    console.log(`${artist.name} from ${artist.country}`);
}

artists.push({
    name: "James Marriott",
    genre: "Indie", 
    country: "UK"
})

console.log(artists)

//---------------------------------------

const shoes = [
    {
        name: "Sneaker", 
        color: "pink",
        price: {
            original: 100,
            discount: 80
        },
        sizes: [7,8,9,10,11,12]
    },
    {
        name: "boots", 
        color: "brown", 
        price: {
            original: 120,
            discount: 100
        }, 
        sizes: [38,39,40,41,42]
    }
]

console.log(shoes[1].price.discount)


