var cup = document.getElementById("cup");

function changeCup() {

    if (this.id == "color1") {
        cup.src = "images/cup1.jpg";
    }
    if (this.id == "color2") {
        cup.src = "images/cup2.jpg";
    }
    if (this.id == "color3") {
        cup.src = "images/cup3.jpg";
    }
    if (this.id == "color4") {
        cup.src = "images/cup4.jpg";
    }
    if (this.id == "color5") {
        cup.src = "images/cup5.jpg";
    }
	
	return false; //舊式的寫法
	
	//取消超連結的預設功能，
	//讓 # 超連結不會產生讓網頁跳回最上面的預設效果
	//讓網頁只會執行我們寫好的 JavaScript 程式。
}

document.getElementById("color1").onclick=changeCup;
document.getElementById("color2").onclick=changeCup;
document.getElementById("color3").onclick=changeCup;
document.getElementById("color4").onclick=changeCup;
document.getElementById("color5").onclick=changeCup;
		
		
