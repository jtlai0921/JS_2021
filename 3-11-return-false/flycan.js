var cup = document.querySelector("#cup");
function changeCup(e) {
    if (this.id == "color1") {
        cup.src = "images/cup1.jpg";
    }
    if (this.id == "color2") {
        cup.src = "images/cup2.jpg";
    }
    if (this.id == "color3") {
        cup.src = "images/cup3.jpg";
    }
    if (this.id == "color4") {
        cup.src = "images/cup4.jpg";
    }
    if (this.id == "color5") {
        cup.src = "images/cup5.jpg";
    }
    e.preventDefault();
}
document.querySelector("#color1").addEventListener("click", changeCup);
document.querySelector("#color2").addEventListener("click", changeCup);
document.querySelector("#color3").addEventListener("click", changeCup);
document.querySelector("#color4").addEventListener("click", changeCup);
document.querySelector("#color5").addEventListener("click", changeCup);