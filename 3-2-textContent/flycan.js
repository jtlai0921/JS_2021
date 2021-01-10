var boxMsg = document.getElementById("box-msg");
function changeTxt() {
    if (this.id == "box1") {
        boxMsg.textContent = "Adobe紅色盒子"
    }
    if (this.id == "box2") {
        boxMsg.textContent = "橘色的CSS"
    }
    if (this.id == "box3") {
        boxMsg.textContent = "藍色的PS"
    }
    if (this.id == "box4") {
        boxMsg.textContent = "綠色的DW"
    }
}

function Txt() {
    boxMsg.textContent = "sssssssssssssW"
}

document.querySelector("#box1").addEventListener("mouseover", changeTxt);
document.querySelector("#box2").addEventListener("mouseover", changeTxt);
document.querySelector("#box3").addEventListener("mouseover", changeTxt);
document.querySelector("#box4").addEventListener("mouseover", changeTxt);

document.querySelector("#box1").addEventListener("mouseout", Txt);
document.querySelector("#box2").addEventListener("mouseout", Txt);
document.querySelector("#box3").addEventListener("mouseout", Txt);
document.querySelector("#box4").addEventListener("mouseout", Txt);