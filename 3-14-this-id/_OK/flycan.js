var cup = document.querySelector("#cup");

function changeCup() {

    var who = this.id;

    cup.src = "images/" + who + ".jpg";

}

document.querySelector("#cup1").addEventListener("click", changeCup);
document.querySelector("#cup2").addEventListener("click", changeCup);
document.querySelector("#cup3").addEventListener("click", changeCup);
document.querySelector("#cup4").addEventListener("click", changeCup);
document.querySelector("#cup5").addEventListener("click", changeCup);

