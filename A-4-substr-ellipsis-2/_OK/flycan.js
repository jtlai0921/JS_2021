//使用 querySelectorAll 之後 div_words 就會自動變成陣列的型態
var div_words = document.querySelectorAll(".words");

//宣告一個 got_words 陣列來先暫時存放每一筆從 .words 內截取出來的文字
var got_words = [];

//使用 for(){} 迴圈一次處理完全部的資料
for (var i = 0; i < div_words.length; i++) {
    
	//先用 got_words[i] 把抓出來的 190 個字放好
    got_words[i] = div_words[i].innerHTML.substr(0, 190);
   
    //再把 got_words[i] 裡面的 190 個字放回到 div_words[i]
	//後面再加上 "..." 符號  
    div_words[i].innerHTML = got_words[i] + "...";
	
}

