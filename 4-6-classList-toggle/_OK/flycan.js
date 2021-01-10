function openBox() {

    var n = this.id.substring(6);

    document.querySelector("#box-" + n).classList.toggle("box-open");

}

document.querySelector("#title-1").addEventListener("click", openBox);
document.querySelector("#title-2").addEventListener("click", openBox);
document.querySelector("#title-3").addEventListener("click", openBox);
document.querySelector("#title-4").addEventListener("click", openBox);

