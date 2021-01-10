var total = 4;
var light = new Array(total).fill(false);

function openBox() {

    var n = this.id.substring(6);

	if(light[n-1]){
    	document.querySelector("#box-" + n).style.display = "none";
		light[n-1] = false;
	} else {
    	document.querySelector("#box-" + n).style.display = "block";
		light[n-1] = true;
	}

}

for(var i=1; i<=4; i++){
	document.querySelector("#title-"+i).addEventListener("click", openBox);
}

