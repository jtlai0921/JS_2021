function clickPic() {
    alert("我是標頭圖片banner................");
}
function clickH1() {
    alert("我是標題H1................");
}
document.querySelector(".head img").addEventListener("click", clickPic);
document.querySelector(".content h1").addEventListener("click", clickH1);