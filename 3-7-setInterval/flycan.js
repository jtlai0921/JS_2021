var picN = 1;
var poster = document.querySelector("#poster");
var poster1 = document.querySelector("#poster1");
function changePic() {
    if (picN < 12) {
        picN++;
    } else {
        picN = 1;
    }
    poster.src = "images/poster" + picN + ".jpg";
    poster1.src = "images/poster" + picN + ".jpg";
}
setInterval(changePic, 200);