(() => {
    const $title = document.getElementById("date");
    // console.log($title);

    const date = new Date();
  // ook mogelijk
  // const date = new Date(1761033620000)

    function pad(number) {
        return String(number).padStart(2, "0");
    }

    const time = `${pad(date.getDate())} / ${pad(date.getMonth() + 1)} / ${pad(date.getFullYear())}
    ${pad(date.getHours())} : ${pad(date.getMinutes())} : ${pad(date.getSeconds())} ${pad(date.getMilliseconds())}`

    $title.innerText = time
})();