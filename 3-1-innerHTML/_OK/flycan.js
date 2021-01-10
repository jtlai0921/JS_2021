var boxMsg = document.getElementById("box-msg");

function changeTxt() {
    if (this.id == "box1") {
        boxMsg.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }
    if (this.id == "box2") {
        boxMsg.innerHTML = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
    }
    if (this.id == "box3") {
        boxMsg.innerHTML = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
    }
    if (this.id == "box4") {
        boxMsg.innerHTML = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
    }
}

document.querySelector("#box1").addEventListener("mouseover", changeTxt);
document.querySelector("#box2").addEventListener("mouseover", changeTxt);
document.querySelector("#box3").addEventListener("mouseover", changeTxt);
document.querySelector("#box4").addEventListener("mouseover", changeTxt);

