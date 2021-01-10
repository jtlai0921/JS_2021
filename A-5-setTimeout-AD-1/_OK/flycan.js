
var div_down = document.querySelector("#down"); //外層元素，就是父層（爸爸）

var div_adBox = document.querySelector("#ad-box"); //內層元素，就是子層（小孩）

window.onload = function() {

    //等待網頁內容全部下載完畢，就會馬上顯示蓋版廣告
    div_adBox.style.display = "block";

}

function deleteAD() {

    //經由父層節點才能將子層的節點移除掉
    div_down.removeChild(div_adBox);
}

//等待 6 秒之後，就執行上面的 deleteAD 功能函式
setTimeout(deleteAD, 6000);

