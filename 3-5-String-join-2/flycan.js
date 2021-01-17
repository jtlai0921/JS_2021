var n = 1;
document.querySelector("#flower").src = "images/photo" + n + ".jpg";
function changePic() {
    n++;
    document.querySelector("#flower").src = "images/photo" + n + ".jpg";
}
document.querySelector("#flower").addEventListener("click", changePic);