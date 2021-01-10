var pic_N = 1;
var ad_Pic = document.querySelector("#ad-pic");

function gogoPic() {
	
    pic_N = Math.ceil(Math.random() * 8);
	
    ad_Pic.src = "images/Holidays-icons-" + pic_N + ".png";

    setTimeout(gogoPic, 50); 
	//當 setTimeout() 放在 function 最後一行時
    //function 每次做到最後一行時都會觸發到 setTimeout()
    //setTimeout() 一直被觸發到，就變成了連續播放的情況 
}

gogoPic(); //讓上面的 function 觸發，執行一次

