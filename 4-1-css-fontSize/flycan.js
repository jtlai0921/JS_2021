var content = document.querySelector("#content");
function doBig() {
    content.style.fontSize = "30px";
}
function doMid() {
    content.style.fontSize = "16px";
}
function doSmall() {
    content.style.fontSize = "11px";
}
document.querySelector("#big").addEventListener("click", doBig);
document.querySelector("#mid").addEventListener("click", doMid);
document.querySelector("#small").addEventListener("click", doSmall);