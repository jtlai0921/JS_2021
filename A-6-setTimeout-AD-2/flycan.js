
var div_adBox = document.querySelector("#ad-box");

window.onload = function() {

    //等待網頁內容全部下載完畢，就會馬上顯示蓋版廣告
    div_adBox.style.display = "block";

}

function deleteAD() {

   
}

//等待 6 秒之後，就執行上面的 deleteAD 功能函式
setTimeout(deleteAD, 6000);