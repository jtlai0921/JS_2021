function openBox() {
    var n = this.id.substring(6);
    document.querySelector("#box-" + n).classList.add("box-open");
}
for (var i = 1; i <= 4; i++) {
    document.querySelector("#title-" + i).addEventListener("click", openBox);
}