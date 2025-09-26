let totalSeconds = 99876;

const secondsInMinutes = 60;
const secondsInHour = secondsInMinutes * 60;
const secondsInDays = secondsInHour * 24;
const secondsInYears = secondsInDays * 365;


const years = Math.floor(totalSeconds / secondsInYears);
console.log(years);
let remainingSeconds = totalSeconds - (years * secondsInYears);
console.log(remainingSeconds);

const days = Math.floor(remainingSeconds / secondsInDays);
console.log(days);
remainingSeconds = totalSeconds - (days * secondsInDays);
// let remaningseconds = totalSeconds % secondsInDays;
console.log(remainingSeconds);

const hours = Math.floor(remainingSeconds / secondsInHour);
console.log(hours);
remainingSeconds = totalSeconds - (hours * secondsInHour);
console.log(remainingSeconds);

// console.log(`
// =====================================================================
// Amount of seconds to convert = ${totalSeconds}
// =====================================================================
// ${totalSeconds} seconds = 0years 1days 3hours 44minutes 36seconds
// =====================================================================
// `)

