window.onload = function () {
    function a() {
        document.getElementById("dog").src = "001.jpg";
    }
    function b() {
        document.getElementById("dog").src = "002.jpg";
    }
    function c() {
        document.getElementById("dog").src = "003.jpg";
    }
    document.getElementById("dog").onmouseover = b;
    document.getElementById("dog").onmouseout = a;
    document.getElementById("dog").onclick = c;
}


