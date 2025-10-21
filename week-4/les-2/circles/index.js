const $circles = document.getElementById("circles")
console.log($circles);

const colors = ["red", "blue", "orange", "purple", "green", "yellow", "cyan"];

function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1))

}

let html = "";

for (let i = 0; i < 6000; i++){
    const randomColor = colors[generateRandomNumber(colors.length - 1)]
    const randomWidth = generateRandomNumber(60);
    const randomTop = generateRandomNumber(window.innerHeight - randomWidth)
    const randomLeft = generateRandomNumber(window.innerWidth - randomWidth)

    html += `<div class="circle"
    style="
        top: ${randomTop}px;
        left: ${randomLeft}px;
        width: ${randomWidth}px;
        height: ${randomWidth}px;
        background-color: ${randomColor};"
    ></div>`
}

$circles.innerHTML = html;

