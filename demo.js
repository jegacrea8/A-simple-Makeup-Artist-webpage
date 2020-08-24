var div = document.getElementsByTagName("div")
var nav = document.getElementsByTagName("nav")

function over(){
    div[0].classList.toggle("wrapper")
    nav[0].classList.toggle("move");
}

div[0].addEventListener("click",over);