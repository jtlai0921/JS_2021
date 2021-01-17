var n = 1;
var flower = document.querySelector("#flower");
flower.src = "images/photo" + n + ".jpg";
function changePic() {
    if (n < 8) {
        n++;
    } else {
        n = 1;
    }
    flower.src = "images/photo" + n + ".jpg";
}
flower.addEventListener("click", changePic);