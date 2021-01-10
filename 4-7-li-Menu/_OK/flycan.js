function showSubMenu(){
	var nowID = this.id.substring(4);
	document.querySelector("#sub"+nowID).classList.add("open");		
}
	
function hideSubMenu(){
	var nowID = this.id.substring(4);
	document.querySelector("#sub"+nowID).classList.remove("open");	
}

document.querySelector("#menu1").addEventListener("mouseover", showSubMenu);
document.querySelector("#menu2").addEventListener("mouseover", showSubMenu);
document.querySelector("#menu3").addEventListener("mouseover", showSubMenu);
document.querySelector("#menu4").addEventListener("mouseover", showSubMenu);
document.querySelector("#menu5").addEventListener("mouseover", showSubMenu);
	
document.querySelector("#menu1").addEventListener("mouseout", hideSubMenu);
document.querySelector("#menu2").addEventListener("mouseout", hideSubMenu);
document.querySelector("#menu3").addEventListener("mouseout", hideSubMenu);
document.querySelector("#menu4").addEventListener("mouseout", hideSubMenu);
document.querySelector("#menu5").addEventListener("mouseout", hideSubMenu);

