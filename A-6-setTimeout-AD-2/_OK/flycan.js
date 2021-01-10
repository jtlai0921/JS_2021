
var div_adBox = document.querySelector("#ad-box");

window.onload = function() {

    //等待網頁內容全部下載完畢，就會馬上顯示蓋版廣告
    div_adBox.style.display = "block";

}


// parentNod 的功能就是指目前物件的父層

function deleteAD() {
    //透過 black_DIV 的父層，就可以把自已移除掉
    div_adBox.parentNode.removeChild(div_adBox);
}

//等待 6 秒之後，就執行上面的 deleteAD 功能函式
setTimeout(deleteAD, 6000);

