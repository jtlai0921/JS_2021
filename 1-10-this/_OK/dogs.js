window.onload = function() {

    //alert(this); // window 代表目前這個瀏覽器

    function changeDog_1() {
        this.src = "001.jpg";
    }

    function changeDog_2() {
        //alert(this.id); // 代表目前被滑鼠觸發的物件的 id 名字
        this.src = "002.jpg";
    }

    function changeDog_3() {
        this.src = "003.jpg";
    }

    document.getElementById("myDog").onmouseover = changeDog_2;
    document.getElementById("myDog").onmouseout = changeDog_1;
    document.getElementById("myDog").onclick = changeDog_3;
}

