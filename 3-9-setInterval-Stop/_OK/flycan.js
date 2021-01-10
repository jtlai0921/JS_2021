var picN = 1; //宣告變數，記錄一開始是在第一張。
var timer; //宣告變數，給計時器使用。
var pic = document.querySelector("#pic");
var play_btn = document.querySelector("#play");
var stop_btn = document.querySelector("#stop");

//設定圖片輪播的動作
function changePic() {

    if (picN < 17) {
        picN += 1;
    } else {
        picN = 1;
    }

    pic.src = "images/pic" + picN + ".jpg";

}

timer = setInterval(changePic, 100); //把計時器放入 timer 變數之中

function doPlay() {
    clearInterval(timer); //事先清除一次計時器變數，就可以避免計時器被重覆啟動的問題
    timer = setInterval(changePic, 100); //再次設定計時器
}

function doStop() {
    clearInterval(timer); //清除計時器變數，就會停下來。
}

play_btn.addEventListener("click", doPlay);
stop_btn.addEventListener("click", doStop);

