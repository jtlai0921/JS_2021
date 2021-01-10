var n = 1; //宣告變數 一開始的初始（值）

document.querySelector("#flower").src = "images/photo" + n + ".jpg";

function changePic() {
    n += 1; //改變 變數（容器）裡面的內容的（值）
    document.querySelector("#flower").src = "images/photo" + n + ".jpg";
}

document.querySelector("#flower").addEventListener("click", changePic);

