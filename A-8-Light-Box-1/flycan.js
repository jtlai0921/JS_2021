// let small_IMG = document.querySelectorAll(".BOX a");
// small_IMG[0].addEventListener("click", flycan_lightBox);
// function flycan_lightBox(e) {
//     let black_DIV = document.createElement("div");
//     black_DIV.setAttribute("class", "black");
//     black_DIV.innerHTML = "<img src='' width='900'>"
//     document.querySelector("#content").appendChild(black_DIV);
//     let big_IMG = document.querySelector("div.black img");
//     black_DIV.classList.add("hide");
//     let PIC = this.getAttribute("href");
//     big_IMG.setAttribute("src", PIC);
//     setTimeout(function () {
//         black_DIV.classList.add("fadeIn");
//     }, 10);
//     black_DIV.addEventListener("click", function () {
//         black_DIV.parentNode.removeChild(black_DIV);
//     });
//     e.preventDefault();
// }
let small_IMG = document.querySelectorAll(".BOX a");
for (let i = 0; i < small_IMG.length; i++) {
    small_IMG[i].addEventListener("click", flycan_lightBox);

}

function flycan_lightBox(e) {
    let black_DIV = document.createElement("div");
    black_DIV.setAttribute("class", "black");
    black_DIV.innerHTML = "<img src='' width='900'>"
    document.querySelector("#content").appendChild(black_DIV);
    let big_IMG = document.querySelector("div.black img");
    black_DIV.classList.add("hide");
    let PIC = this.getAttribute("href");
    big_IMG.setAttribute("src", PIC);
    setTimeout(function () {
        black_DIV.classList.add("fadeIn");
    }, 10);
    black_DIV.addEventListener("click", function () {
        black_DIV.parentNode.removeChild(black_DIV);
    });
    e.preventDefault();
}