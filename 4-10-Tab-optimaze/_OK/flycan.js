
var hasOpen = 1; //宣告一個變數，記錄一開始初始值原來被打開的頁籤是第一個

function showBox(){
		
	//只要把原來被打開的那一個頁籤關掉
	document.querySelector("#box"+hasOpen).classList.remove("open");
		
	//再把目前被滑鼠摸到的那一個打開來
	var nowTouch = this.id.substr(3);
	document.querySelector("#box"+nowTouch).classList.add("open");
	
	//只要把原來被打開的那一個 tab 按鈕的樣式刪掉
	document.querySelector("#tab"+hasOpen).classList.remove("nowTab");
		
	//再把目前被滑鼠摸到的那一個 tab 按鈕的樣式加上去
	document.querySelector("#tab"+nowTouch).classList.add("nowTab");
	
	//上面的動作全部做完之後
	//就把 hasOpen 原本被打開的頁籤變數修改為 nowTouch 目前被滑鼠摸到的那一個	
	hasOpen = nowTouch;

}

document.querySelector("#tab1").addEventListener("mouseover", showBox);
document.querySelector("#tab2").addEventListener("mouseover", showBox);
document.querySelector("#tab3").addEventListener("mouseover", showBox);
document.querySelector("#tab4").addEventListener("mouseover", showBox);


