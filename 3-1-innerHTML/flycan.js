var boxMsg = document.getElementById("box-msg");
function changeTxt() {
    if (this.id == "box1") {
        boxMsg.innerHTML = "Adobe紅色盒子"
    }
    if (this.id == "box2") {
        boxMsg.innerHTML = "橘色的CSS"
    }
    if (this.id == "box3") {
        boxMsg.innerHTML = "藍色的PS"
    }
    if (this.id == "box4") {
        boxMsg.innerHTML = "綠色的DW"
    }
}
document.querySelector("#box1").addEventListener("mouseover", changeTxt);
document.querySelector("#box2").addEventListener("mouseover", changeTxt);
document.querySelector("#box3").addEventListener("mouseover", changeTxt);
document.querySelector("#box4").addEventListener("mouseover", changeTxt);