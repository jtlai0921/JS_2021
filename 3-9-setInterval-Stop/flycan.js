var picN = 1;
var timer;
var pic = document.querySelector("#pic");
var play_btn = document.querySelector("#play");
var stop_btn = document.querySelector("#stop");
function changePic() {
    if (picN < 17) {
        picN += 1;
    }
    else {
        picN = 1;
    }
    pic.src = "images/pic" + picN + ".jpg";

}
timer = setInterval(changePic, 100);
function doPlay() {
    clearInterval(timer);
    timer = setInterval(changePic, 100);

}
function doStop() {
    clearInterval(timer);
    clearInterval(timer);

}
play_btn.addEventListener("click", doPlay);
stop_btn.addEventListener("click", doStop);