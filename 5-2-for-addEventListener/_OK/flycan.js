function showName(){
		
	alert(this.id);	
		
}

for(var i=1; i<=16; i++){		
	document.querySelector("#pic"+ i).addEventListener("click", showName);
}

