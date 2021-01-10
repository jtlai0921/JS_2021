var content = document.querySelector("#content");

                                                          //使用匿名出式
//document.querySelector("#btn").addEventListener("click", function(){} ); 

document.querySelector("#big").addEventListener("click", function() {
    content.style.fontSize = "30px";
});

document.querySelector("#mid").addEventListener("click", function() {
    content.style.fontSize = "16px";
});

document.querySelector("#small").addEventListener("click", function() {
    content.style.fontSize = "11px";
});

