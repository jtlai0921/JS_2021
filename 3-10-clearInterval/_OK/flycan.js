	var picN = 1; //宣告一個變數，用來記住圖片在第幾張	
	var timer; //宣告一個變數，等一下要用來設定給計時器用。
	var box_div = document.querySelector("#box");
	var pic_img = document.querySelector("#pic");
	var left_btn = document.querySelector("#left");
	var right_btn = document.querySelector("#right");

	//==設定圖片輪播的動作=============================================

	function changePic() {

	    if (picN < 17) {
	        picN += 1;
	    } else {
	        picN = 1;
	    }

	    pic_img.src = "images/pic" + picN + ".jpg";

	}

	timer = setInterval(changePic, 100); //設定 timer 變數計時器

	//==滑鼠摸到時就清除計時器===========================================

	function doStop() {
	    clearInterval(timer); //清除 TT 計時器
	}

	function doPlay() {
	    timer = setInterval(changePic, 100); //重新啟動 TT 變數計時器
	}

	box_div.addEventListener("mouseover", doStop);
	box_div.addEventListener("mouseout", doPlay);

	//==滑鼠按按鈕時就更換到下一張圖片=====================================

	function goLeft() {

	    if (picN < 17) {
	        picN += 1;
	    } else {
	        picN = 1;
	    }

	    pic_img.src = "images/pic" + picN + ".jpg";
	}

	function goRight() {

	    if (picN > 1) {
	        picN -= 1;
	    } else {
	        picN = 17;
	    }

	    pic_img.src = "images/pic" + picN + ".jpg";
	}

	left_btn.addEventListener("click", goLeft);
	right_btn.addEventListener("click", goRight);