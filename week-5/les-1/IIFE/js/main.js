
(() => {
    // let name = DataModule.name
    // name = "Cedar"
    // console.log(name)
    
    const number = 10;
    console.log(number)

    const $list = document.getElementById("list")
    console.log($list)

    //html opbouwen
    let html = ""
    for (const destination of destinations) {
        html += `
        <li class="item">
        <h2>${destination.name} (${destination.country})</h2>
        <p>Continent: ${destination.continent}</p>
        </li>
        `
    }
    $list.innerHTML = html;


})();
