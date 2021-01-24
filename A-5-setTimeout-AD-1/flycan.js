let div_down = document.querySelector("#down");
let div_adBox = document.querySelector("#ad-box");
window.onload = function () {
    div_adBox.style.display = "block";
}
function deleteAD() {
    div_down.removeChild(div_adBox);
}
setTimeout(deleteAD, 5000);