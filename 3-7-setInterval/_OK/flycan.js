var picN = 1;

var poster = document.querySelector("#poster");

function changePic() {

    if (picN < 12) {
        picN += 1;
    } else {
        picN = 1;
    }

    poster.src = "images/poster" + picN + ".jpg";

}

setInterval(changePic, 2000); //設定計時器
                              //每隔 2 秒之後，就會再自動執行一次


