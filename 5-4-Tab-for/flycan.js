function showBox() {
	for (let i = 1; i <= 4; i++) {
		//先把 4 個 BOX 關掉
		document.querySelector("#box" + i).classList.remove("open");
		//先把 4 個 tab 按鈕的樣式刪掉
		document.querySelector("#tab" + i).classList.remove("nowTab");
	}



	//再把目前被滑鼠摸到的那一個打開來
	var now = this.id.substring(3);
	document.querySelector("#box" + now).classList.add("open");



	//再把目前被滑鼠摸到的那一個 tab 按鈕的樣式加上去
	document.querySelector("#tab" + now).classList.add("nowTab");

}
for (let i = 1; i <= 4; i++) {
	document.querySelector("#tab" + i).addEventListener("mouseover", showBox);
}


