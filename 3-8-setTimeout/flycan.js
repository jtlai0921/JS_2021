var picN = 1;
var poster = document.querySelector("#poster");
function changePic() {
    if (picN < 12) {
        picN++;
    } else {
        picN = 1;
    }
    poster.src = "images/poster" + picN + ".jpg";
}

setTimeout(changePic, 3000);
