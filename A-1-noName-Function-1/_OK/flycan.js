var n = 1;

var flower = document.querySelector("#flower");

flower.src = "images/photo" + n + ".jpg";

                                   //使用匿名函式
//flower.addEventListener("click", function(){} ); 

flower.addEventListener("click", function() {

    if (n < 8) {
        n += 1;
    } else {
        n = 1;
    }

    flower.src = "images/photo" + n + ".jpg";

});

