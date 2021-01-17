function showBox() {
    document.querySelector("#box1").classList.remove("open");
    document.querySelector("#box2").classList.remove("open");
    document.querySelector("#box3").classList.remove("open");
    document.querySelector("#box4").classList.remove("open");
    var now = this.id.substring(3);
    document.querySelector("#box" + now).classList.add("open");

}
document.querySelector("#tab1").addEventListener("mouseover", showBox);
document.querySelector("#tab2").addEventListener("mouseover", showBox);
document.querySelector("#tab3").addEventListener("mouseover", showBox);
document.querySelector("#tab4").addEventListener("mouseover", showBox);