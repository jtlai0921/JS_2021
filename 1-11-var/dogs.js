window.onload = function() {

    function changeDog_1() {
        this.src = "001.jpg";
    }

    function changeDog_2() {
        this.src = "002.jpg";
    }

    function changeDog_3() {
        this.src = "003.jpg";
    }

    document.getElementById("myDog").onmouseover = changeDog_2;
    document.getElementById("myDog").onmouseout = changeDog_1;
    document.getElementById("myDog").onclick = changeDog_3;
}