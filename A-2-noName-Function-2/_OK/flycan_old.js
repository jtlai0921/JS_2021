var content = document.getElementById("content");

                                         //使用匿名出式
//document.getElementById("btn").onclick=function(){}; 

document.getElementById("big").onclick=function(){
	content.style.fontSize = "30px";
};
    
document.getElementById("mid").onclick=function(){
    content.style.fontSize = "16px";
};

document.getElementById("small").onclick=function(){
    content.style.fontSize = "11px";
};

