const days = [
    "Maandag", // 0
    "Dinsdag", // 1
    "Woensdag", // 2
    "Donderdag", // 3
    "Vrijdag" // 4
]

const firstDayOfTheWeek = days[0];
console.log(firstDayOfTheWeek);
console.log(days.length);

// //Laatste item uit mijn array
// const lastDayOfTheWeek = days[days.length - 1]
// console.log(lastDayOfTheWeek);

//For .. of 
for (const day of days) {
    console.log(day);
}

const numbers = [3, 40, 29];
let total = 0;

for (const number of numbers) {
    total = total + number
    console.log(total);
}

console.log("het totaal is " + total)

for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}