var big = document.getElementById("bigPhoto");

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

document.getElementById("small1").onclick = changePic_1;
document.getElementById("small2").onclick = changePic_2;
document.getElementById("small3").onclick = changePic_3;
document.getElementById("small4").onclick = changePic_4;
document.getElementById("small5").onclick = changePic_5;
document.getElementById("small6").onclick = changePic_6;

