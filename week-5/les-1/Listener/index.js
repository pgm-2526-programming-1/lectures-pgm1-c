(() => {

    const $btn = document.getElementById("click")
    
    function clickLog() { 
        alert("Je hebt op de knop geklikt")  
    }

    $btn.addEventListener('dblclick', clickLog)



    const colors = ["red", "purple", "green", "orange", "blue"];
    const $list = document.getElementById("colorList");

    let html = ""
    for (let i = 0; i < colors.length; i++){
        html += `
        <li style="cursor:pointer;">${colors[i]}</li>
        `
    }
    $list.innerHTML = html

    //Event listeners
    const items = $list.querySelectorAll("li")

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", () => {
            document.body.style.backgroundColor = colors[i]
        })
    }
    

})();