var runTimes = 1; //宣告變數，要記錄播放的次數
var pic_N = 1;
var ad_Pic = document.querySelector("#ad-pic");

function gogoPic() {
    pic_N = Math.ceil(Math.random() * 8);
    ad_Pic.src = "images/Holidays-icons-" + pic_N + ".png";
	
    if (runTimes < 20) { //當 runTimes 小於 20 時 if(){} 就會繼續執行
        runTimes++; 
		//讓 runTimes 一直遞加，當 runTimes 超過 20 時 if(){} 就不會運作了
        setTimeout(gogoPic, 50);
    }
}

gogoPic();

