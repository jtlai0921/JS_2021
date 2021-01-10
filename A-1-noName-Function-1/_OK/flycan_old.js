var n = 1;

var flower = document.getElementById("flower");

flower.src = "images/photo" + n + ".jpg";

                 //使用匿名出式
//flower.onclick=function(){}; 

flower.onclick = function() {

    if (n < 8) {
        n += 1;
    } else {
        n = 1;
    }

    flower.src = "images/photo" + n + ".jpg";
};

