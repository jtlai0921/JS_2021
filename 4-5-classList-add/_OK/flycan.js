function openBox() {
    if (this.id == "title-1") {
        document.querySelector("#box-1").classList.add("box-open");
    }
    if (this.id == "title-2") {
        document.querySelector("#box-2").classList.add("box-open");
    }
    if (this.id == "title-3") {
        document.querySelector("#box-3").classList.add("box-open");
    }
    if (this.id == "title-4") {
        document.querySelector("#box-4").classList.add("box-open");
    }
}

document.querySelector("#title-1").addEventListener("click", openBox);
document.querySelector("#title-2").addEventListener("click", openBox);
document.querySelector("#title-3").addEventListener("click", openBox);
document.querySelector("#title-4").addEventListener("click", openBox);

