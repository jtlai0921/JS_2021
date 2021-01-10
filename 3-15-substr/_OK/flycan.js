var cup = document.querySelector("#cup");

function changeCup() {

    var n = this.id.substr(5);

    cup.src = "images/cup" + n + ".jpg";

}

document.querySelector("#color1").addEventListener("click", changeCup);
document.querySelector("#color2").addEventListener("click", changeCup);
document.querySelector("#color3").addEventListener("click", changeCup);
document.querySelector("#color4").addEventListener("click", changeCup);
document.querySelector("#color5").addEventListener("click", changeCup);

