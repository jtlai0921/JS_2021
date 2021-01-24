// var content = document.querySelector("#content");

// document.querySelector("#big").addEventListener("click", function () {
//     content.style.fontSize = "30px";
// });
// document.querySelector("#mid").addEventListener("click", function () {
//     content.style.fontSize = "16px";
// });
// document.querySelector("#small").addEventListener("click", function () {
//     content.style.fontSize = "11px";
// });
var content = document.getElementById("content");

document.getElementById("big").onclick = function () {
    content.style.fontSize = "30px";
};
document.getElementByIdr("mid").onclick = function () {
    content.style.fontSize = "16px";
};
document.getElementById("small").onclick = function () {
    content.style.fontSize = "11px";
};

