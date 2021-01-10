var n = 0; //宣告變數，用來記錄初始值現在是第一張。

var word = ["大毛", "二毛", "三毛", "四毛", "五毛", "小毛"];

var pic = [
		   "dog-0.jpg", 
		   "dog-1.jpg",
		   "dog-2.jpg", 
		   "dog-3.jpg", 
		   "dog-4.jpg", 
		   "dog-5.jpg"
		   ];

function nextPhoto() {

    if (n < 5) {
        n += 1;
    } else {
        n = 0;
    }

    document.querySelector("#title").textContent = "我的名字叫" + word[n];
    document.querySelector("#pic").src = "images/" + pic[n];
}

document.querySelector("#box").addEventListener("click", nextPhoto);


