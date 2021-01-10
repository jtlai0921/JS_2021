// 使用 querySelectorAll() 所取出來的物件是陣列的型態
var small_IMG = document.querySelectorAll(".BOX a");


for (var i = 0; i < small_IMG.length; i++) {
    small_IMG[i].addEventListener("click", flycan_lightBox);
}


function flycan_lightBox(e) {

    //宣告變數，使用 createElement 建立一個新的<div>
    var black_DIV = document.createElement("div");

    //使用 setAttribute() 設定屬性幫這個新的<div>設定屬性 class="black"
    //就會變成 <div class="black"> 
    //然後先在外部 CSS 幫這個 <div class="black"> 設定為半透明黑色，還有寬高 100%
    black_DIV.setAttribute("class", "black");

    //使用 innerHTML 在這個新的 <div> 之內加入 <img> 標籤
    black_DIV.innerHTML = "<img src='' width='900'>"

    //使用 appendChild 就可以把這個新的 <div> 插入到 HTML 指定的位置下
    //在這邊，我們把這個新的 <div> 插入到 #content 的最下方
    document.querySelector("#content").appendChild(black_DIV);

    //幫 black_DIV 內 <img> 宣告到變數之內，會比較好使用
    var big_IMG = document.querySelector("div.black img");

    //先把剛剛加入的黑色 <div> 隱藏起來
    black_DIV.classList.add("hide");

    //使用 getAttribute() 抓取屬性功能
    //抓取目前滑鼠按到的小圖片連結上 href 內的資料(圖片的路徑)
    //說明：滑鼠按到誰，誰就是 this
    var PIC = this.getAttribute("href");

    //使用 setAttribute() 設定屬性
    //把剛剛抓取的圖片的路徑設定到 black_DIV 內 <img> 的 src 路徑之內
    big_IMG.setAttribute("src", PIC);

    //因為這個範例當按下小圖按鈕時 <div> 和他的 class 是會同時產生的
    //兩者同時產生時，其中含有動畫的 class 的動畫就不會呈出現效果
    //因此我們使用 setTimeout() 讓有含有動畫的 class 慢一步出現
    //如此一來就可以讓 <div> 正常的產生含有動畫的 class 效果
    setTimeout(function() {
        black_DIV.classList.add("fadeIn");
    }, 10);


    // parentNod 的功能就是指目前物件的父層
    black_DIV.addEventListener("click", function() {
        //透過 black_DIV 的父層，就可以把自已移除掉
        black_DIV.parentNode.removeChild(black_DIV);
    })

    e.preventDefault();
}

