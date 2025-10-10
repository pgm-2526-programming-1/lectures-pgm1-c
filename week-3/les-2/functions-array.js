const animals = ["Giraffe", "Olifant", "Leeuw", "Dromedaris", "Chameleon"];

const checkAnimal = (animalList, animal) => {
    // if (animalList.includes(animal)) {
    //     console.log(`${animal} is in the list`)
    // } else {
    //     console.log(`${animal} is not in the list`)
    // }

    //Ternary operator (korte if-else)
    animalList.includes(animal) ? console.log(`${animal} is in the list`) : console.log(`${animal} is not in the list`)
}

checkAnimal(animals, "Tiger")
checkAnimal(animals, "Leeuw")

function findAnimal(animalList, animal) {
    const index = animalList.indexOf(animal);
    if (index !== -1) {
        console.log(`${animal} is at the index ${index}`)
    } else {
        console.log(`${animal} is not in the list.`)
    }

}

findAnimal(animals, "Tiger")
findAnimal(animals, "Olifant")