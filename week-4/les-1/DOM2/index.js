console.log(window.innerHeight)
console.log(window.innerWidth)

console.log(document);

document.body.style.backgroundColor = '#2e6f40'

//via tag ->
// const number = 10;
// const $h1 = document.getElementsByTagName("h1")[0];
// $h1.innerText = "Titel 2"


//via className -> Meerdere elementen
const $h1again = document.getElementsByClassName("heading")[0]
console.log($h1again);
$h1again.innerText = "Titel 3"


//Via id -> meest gebruikt
const $h1id = document.getElementById("title");
console.log($h1id);
$h1id.innerText = "Titel 4"



const items = [
    "Chicken Samurai",
    "Pizza",
    "Lasagna", 
    "Pasta", 
    "Taart", 
    "Nuggets"
]


const $list = document.getElementById("list")

let html = ""
for (const item of items) {
    html += `
     <li class="list-item">${item}</li>
    `
}

$list.innerHTML = html
