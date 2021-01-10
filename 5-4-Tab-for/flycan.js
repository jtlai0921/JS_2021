function showBox(){
		
	//先把 4 個 BOX 關掉
	document.querySelector("#box1").classList.remove("open");
	document.querySelector("#box2").classList.remove("open");
	document.querySelector("#box3").classList.remove("open");
	document.querySelector("#box4").classList.remove("open");
		
	//再把目前被滑鼠摸到的那一個打開來
	var now = this.id.substring(3);
	document.querySelector("#box"+now).classList.add("open");
	
	//先把 4 個 tab 按鈕的樣式刪掉
	document.querySelector("#tab1").classList.remove("nowTab");
	document.querySelector("#tab2").classList.remove("nowTab");
	document.querySelector("#tab3").classList.remove("nowTab");
	document.querySelector("#tab4").classList.remove("nowTab");
		
	//再把目前被滑鼠摸到的那一個 tab 按鈕的樣式加上去
	document.querySelector("#tab"+now).classList.add("nowTab");	

}

document.querySelector("#tab1").addEventListener("mouseover", showBox);
document.querySelector("#tab2").addEventListener("mouseover", showBox);
document.querySelector("#tab3").addEventListener("mouseover", showBox);
document.querySelector("#tab4").addEventListener("mouseover", showBox);


