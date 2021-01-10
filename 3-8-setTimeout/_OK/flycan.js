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

setTimeout(changePic, 3000); //設定暫停器
                             //打開網頁後，先暫停 3 秒，之後才執行一次
							 //只會執行一次

