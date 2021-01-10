var boxMsg = document.getElementById("box-msg");

function changeTxt() {
    if (this.id == "box1") {
        boxMsg.textContent = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }
    if (this.id == "box2") {
        boxMsg.textContent = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
    }
    if (this.id == "box3") {
        boxMsg.textContent = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
    }
    if (this.id == "box4") {
        boxMsg.textContent = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
    }
}

document.querySelector("#box1").addEventListener("mouseover", changeTxt);
document.querySelector("#box2").addEventListener("mouseover", changeTxt);
document.querySelector("#box3").addEventListener("mouseover", changeTxt);
document.querySelector("#box4").addEventListener("mouseover", changeTxt);

