const books = ["The Hobbit", "Harry Potter", "Percy Jackson"];

//split 
const bookString = "The hobbit, Harry Potter, Percy Jackson";
const bookArray = bookString.split(",");
console.log(bookArray);

//join
const bookString2 = books.join(" | ");
console.log(bookString2);

//push
books.push("The Catcher in the Rye");
console.log(books);

//pop
const lastBook = books.pop();
console.log(lastBook)
console.log(books)

//includes (geeft boolean terug) -> Zit dit element in de array (true/false)
console.log(books.includes("Harry Potter"));
console.log(books.includes("The Catcher in the Rye"));

//indexOf
const position = books.indexOf("Harry Potter");
console.log(position);

//length
console.log(books.length);


//Combinatie includes en indexOf
if (books.includes("Harry Potter")) {
    console.log(`Harry Potter staat op index ${books.indexOf("Harry Potter")}`)
}
else {
    console.log("Harry Potter staat niet in de lijst.")
}


