const intervalId = setInterval(randomColor, 1000)
function randomColor() {
    if (document.getElementById("myCheckbox").checked){
        document.querySelector("header").style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');;
    }
}
