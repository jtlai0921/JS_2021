var big = document.querySelector("#bigPhoto");
function changePic() {
    alert(this.id);
    console.log(this.id);
    if (this.id == "small1") {
        big.src = "images/001.jpg";
    }
    else if (this.id == "small2") {
        big.src = "images/002.jpg";
    }

    else if (this.id == "small3") {
        big.src = "images/003.jpg";
    }

    else if (this.id == "small4") {
        big.src = "images/004.jpg";
    }
    else if (this.id == "small5") {
        big.src = "images/005.jpg";
    }
    else if (this.id == "small6") {
        big.src = "images/006.jpg";
    }

}
document.querySelector("#small1").addEventListener("click", changePic);
document.querySelector("#small2").addEventListener("click", changePic);
document.querySelector("#small3").addEventListener("click", changePic);
document.querySelector("#small4").addEventListener("click", changePic);
document.querySelector("#small5").addEventListener("click", changePic);
document.querySelector("#small6").addEventListener("click", changePic);
