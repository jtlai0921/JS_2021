var light_1 = false;
var light_2 = false;
var light_3 = false;
var light_4 = false;

function openBox1() {
    if (light_1 == false) {
        document.querySelector("#box-1").style.display = "block";
        light_1 = true;
    } else {
        document.querySelector("#box-1").style.display = "none";
        light_1 = false;
    }
}

function openBox2() {
    if (light_2 == false) {
        document.querySelector("#box-2").style.display = "block";
        light_2 = true;
    } else {
        document.querySelector("#box-2").style.display = "none";
        light_2 = false;
    }
}

function openBox3() {
    if (light_3 == false) {
        document.querySelector("#box-3").style.display = "block";
        light_3 = true;
    } else {
        document.querySelector("#box-3").style.display = "none";
        light_3 = false;
    }
}

function openBox4() {
    if (light_4 == false) {
        document.querySelector("#box-4").style.display = "block";
        light_4 = true;
    } else {
        document.querySelector("#box-4").style.display = "none";
        light_4 = false;
    }
}

document.querySelector("#title-1").addEventListener("click", openBox1);
document.querySelector("#title-2").addEventListener("click", openBox2);
document.querySelector("#title-3").addEventListener("click", openBox3);
document.querySelector("#title-4").addEventListener("click", openBox4);