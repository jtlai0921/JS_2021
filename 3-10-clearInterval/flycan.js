var picN = 1;
var timer;
var box_div = document.querySelector("#box");
var pic_img = document.querySelector("#pic");
var left_btn = document.querySelector("#left");
var right_btn = document.querySelector("#riight");
function changePic() {
    if (picN < 17) {
        picN++;
    } else {
        picN = 1;
    }
    pic_img.src = "images/pic" + picN + ".jpg";
}
timer = setInterval(changePic, 100);
function doStop() {
    clearInterval(timer);
}
function doplay() {
    timer = setInterval(changePic, 100);
}
box_div.addEventListener("mouseover", doStop);
box_div.addEventListener("mouseout", doPlay);
function goLeft() {
    if (picN < 17) {
        picN += 1;
    } else {
        picN = 1;
    }
    pic_img.src = "images/pic" + picN + ".jpg";
}
function goRight() {
    if (picN > 1) {
        picN -= 1;
    } else {
        picN = 17;
    }
    pic_img.src = "images/pic" + picN + ".jpg";
}
left_btn.addEventListener("click", goLeft);
right_btn.addEventListener("click", goRight);