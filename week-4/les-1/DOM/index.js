console.log("Hallo");
console.log("Test", "Test2");

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(document);

document.body.style.backgroundColor = "#ff33aa"

//html aanpassen
//via tag -> Gaan we niet veel doen
const $h1 = document.getElementsByTagName("h1")[0];
console.log($h1);
$h1.innerText = "Dit is mijn nieuwe titel"

//via className -> Enkel indien er meerdere zijn (Meerdere tegelijk ophalen)
document.getElementsByClassName("heading")[0].innerText = "Nog een andere titel"


//via id -> beste manier
const $title = document.getElementById("title");
console.log($title);
$title.innerText = "Dit is nieuw nieuw"
$title.style.fontSize = "3.5rem";
$title.style.color = "#ffffff";


//Array naar HTML
const items = [
    "Chicken Samurai",
    "Pizza",
    "Lasagna", 
    "Pasta", 
    "Taart", 
    "Nuggets"
]

const $list = document.getElementById("list");
console.log($list);

if ($list !== null) {
    let html = "";
    for (const item of items) {
        html += `<li class="list-item">${item}</li>`
    }

    $list.innerHTML = html;
}

