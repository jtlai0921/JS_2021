var bookcase = [];

bookcase[0] = "Adobe Acrobat";
bookcase[1] = "Adobe Creative Suite";
bookcase[2] = "Adobe Photoshop";
bookcase[3] = "Adobe Dreamweaver";


for (var i = 0; i < bookcase.length; i++) {
    document.querySelector("#box" + i).addEventListener("mouseover", showTXT);
    document.querySelector("#box" + i).addEventListener("mouseout", restoreTXT);
}

function showTXT() {

    var N = this.id.substring(3);

    document.querySelector("#box-msg").textContent = bookcase[N];

}

function restoreTXT() {
    document.querySelector("#box-msg").textContent = "飛肯設計學苑課程";
}

