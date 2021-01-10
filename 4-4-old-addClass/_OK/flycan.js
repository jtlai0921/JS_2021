function openBox() {
	
    if (this.id == "title-1") {
		document.querySelector("#box-1").className="box";
    }
    if (this.id == "title-2") {
		document.querySelector("#box-2").className="box";
    }
    if (this.id == "title-3") {
		document.querySelector("#box-3").className="box";
    }
    if (this.id == "title-4") {
		document.querySelector("#box-4").className="box";
    }
	
}


document.querySelector("#title-1").addEventListener("click", openBox);
document.getElementById("title-2").addEventListener("click", openBox);
document.getElementById("title-3").addEventListener("click", openBox);
document.getElementById("title-4").addEventListener("click", openBox);


