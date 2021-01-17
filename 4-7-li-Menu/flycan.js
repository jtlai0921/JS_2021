function showSubNenu() {
    var nowID = this.id.substring(4);
    document.querySelector("#sub" + nowID).classList.add("open");
}
function hideSubNenu() {
    var nowID = this.id.substring(4);
    document.querySelector("#sub" + nowID).classList.remove("open");
}
document.querySelector("#menu1").addEventListener("mouseover", showSubNenu);
document.querySelector("#menu2").addEventListener("mouseover", showSubNenu);
document.querySelector("#menu3").addEventListener("mouseover", showSubNenu);
document.querySelector("#menu4").addEventListener("mouseover", showSubNenu);
document.querySelector("#menu5").addEventListener("mouseover", showSubNenu);
document.querySelector("#menu1").addEventListener("mouseout", hideSubNenu);
document.querySelector("#menu2").addEventListener("mouseout", hideSubNenu);
document.querySelector("#menu3").addEventListener("mouseout", hideSubNenu);
document.querySelector("#menu4").addEventListener("mouseout", hideSubNenu);
document.querySelector("#menu5").addEventListener("mouseout", hideSubNenu);