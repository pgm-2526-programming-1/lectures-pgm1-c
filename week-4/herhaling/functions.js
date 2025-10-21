function sayHello(){
    console.log("Hallo")
}

sayHello()
sayHello()
console.log("Nog eens?")
sayHello()

//uitvoerende functies
function logSum(x = 5 , y = 10) {
    console.log(x + y)
}

logSum(5, 6); //11
logSum(20, 12); // 32
logSum(50); // 60

//return functions
function getSum(x = 5, y = 10) {
    return x + y
}

console.log(`De som is ${getSum(10, 20)}`)
const result = getSum(2, 3)
console.log(result)

//Arrow functions -> herbekijk les week 3



