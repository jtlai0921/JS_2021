
var div_adBox = document.querySelector("#ad-box");

window.onload = function() {
    //等待網頁內容全部下載完畢，就會馬上顯示蓋版廣告
    div_adBox.style.display = "block";
}

// setTimeout( function(){} , 6000);

//等待 6 秒之後，就執行匿名函式
setTimeout(function() {
    div_adBox.parentNode.removeChild(div_adBox);
}, 6000);

