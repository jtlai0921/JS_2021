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

    var dog = document.getElementById("myDog");

    dog.onmouseover = changeDog_2;
    dog.onmouseout = changeDog_1;
    dog.onclick = changeDog_3;
}

