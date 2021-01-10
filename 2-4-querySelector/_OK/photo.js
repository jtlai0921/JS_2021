var big = document.querySelector("#bigPhoto");

function changePic_1() {
    big.src = "images/001.jpg";
}

function changePic_2() {
    big.src = "images/002.jpg";
}

function changePic_3() {
    big.src = "images/003.jpg";
}

function changePic_4() {
    big.src = "images/004.jpg";
}

function changePic_5() {
    big.src = "images/005.jpg";
}

function changePic_6() {
    big.src = "images/006.jpg";
}

document.querySelector("#small1").addEventListener("click", changePic_1);
document.querySelector("#small2").addEventListener("click", changePic_2);
document.querySelector("#small3").addEventListener("click", changePic_3);
document.querySelector("#small4").addEventListener("click", changePic_4);
document.querySelector("#small5").addEventListener("click", changePic_5);
document.querySelector("#small6").addEventListener("click", changePic_6);

