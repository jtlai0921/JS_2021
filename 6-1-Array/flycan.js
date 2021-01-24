//第一種
// let bookcase = new Array();
// bookcase[0] = "Adobe Acrobat";
// bookcase[1] = "Adobe Creative Suite";
// bookcase[2] = "Adobe Photoshop";
// bookcase[3] = "Adobe Dreamweaver";
// for (let i = 0; i < 4; i++) {
//     document.querySelector("#box" + i).addEventListener("mouseover", showTXT);
//     document.querySelector("#box" + i).addEventListener("mouseout", restoreTXT);
// }
// function showTXT() {
//     let N = this.id.substring(3);
//     document.querySelector("#box-msg").textContent = bookcase[N];
// }
// function restoreTXT() {

//     document.querySelector("#box-msg").textContent = "飛肯設計學院";
// }
//第2種
// let bookcase = [];
// bookcase[0] = "Adobe Acrobat";
// bookcase[1] = "Adobe Creative Suite";
// bookcase[2] = "Adobe Photoshop";
// bookcase[3] = "Adobe Dreamweaver";
// for (let i = 0; i < bookcase.length; i++) {
//     document.querySelector("#box" + i).addEventListener("mouseover", showTXT);
//     document.querySelector("#box" + i).addEventListener("mouseout", restoreTXT);
// }
// function showTXT() {
//     let N = this.id.substring(3);
//     document.querySelector("#box-msg").textContent = bookcase[N];
// }
// function restoreTXT() {

//     document.querySelector("#box-msg").textContent = "飛肯設計學院";
// }
//第3種
let bookcase = ["Adobe Acrobat", "Adobe Creative Suite", "Adobe Photoshop", "Adobe Dreamweaver"];

for (let i = 0; i < bookcase.length; i++) {
    document.querySelector("#box" + i).addEventListener("mouseover", showTXT);
    document.querySelector("#box" + i).addEventListener("mouseout", restoreTXT);
}
function showTXT() {
    let N = this.id.substring(3);
    document.querySelector("#box-msg").textContent = bookcase[N];
}
function restoreTXT() {

    document.querySelector("#box-msg").textContent = "飛肯設計學院";
}