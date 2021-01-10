//使用 querySelector 只會取出第一個 .words 節點
var div_words = document.querySelector(".words");

// 使用 div_words.innerHTML 會取出 div 裡面全部的文字和標籤
// 使用 substr(0, 185) 會取出 div 裡面第 0 個到第 185 個文字和標籤
var get_words = div_words.innerHTML.substr(0, 185);

//將截取出來的 185 個文字放回到 .words 裡面, 再加上"..."符號
div_words.innerHTML = get_words + "...";


