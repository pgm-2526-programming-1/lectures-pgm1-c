// function functionName(argument1, argument2 = 40) {
//     console.log("Hallo")
//     console.log(argument1)
//     console.log(argument2)
// }

// functionName("test", 60)
// functionName(20)

/*************************
 * Originele Manier (Function)
 */

//1: Een functie die iets uitvoert
function doSomething() {
    console.log("Ik ben een functie en ik voer iets uit! Nice")
}

const result = doSomething()
console.log("Result 1", result)

//2 Een functie die iets terug geeft (bv. berekening)
function getSomething() {

    return "Ik ben een functie die iets terug geeft"
}

const result2 = getSomething()
console.log("Result 2", result2)

/************* 
 * Modernere manier (Arrow function)
 */

//Funcite die iets uitvoert
const doSomethingArrow = () => {
    console.log("Ik doe iets, again...")
}

doSomethingArrow()

//functie die iets terug geeft
const getSomethingArrow = () => {
    return "ik ben een functie die iets teruggeeft."
}

//Functie die iets terug geeft (Shorthand)
const getSomethingArrowShort = () => "Ik ben een functie die iets terug geeft."

function getEmoji(name) {
    
    if (!name) {
        //name !== undefined
        return "Geen naam mee gegeven."
    }

    if (name === "vuur") {
        return "🔥";
    } else if (name === "computer") {
        return "💻"
    } else {
        return "❓"
    }
}

console.log(getEmoji());
console.log(getEmoji("vuur"))
console.log(getEmoji("computer"))
console.log(getEmoji("appel"))

