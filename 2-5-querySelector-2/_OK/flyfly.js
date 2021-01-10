function clickPic() {
    alert("我點選到圖片了");
}

function clickH1() {
    alert("我點選到標題字了");
}

document.querySelector(".head img").addEventListener("click", clickPic);

document.querySelector(".content h1").addEventListener("click", clickH1);


