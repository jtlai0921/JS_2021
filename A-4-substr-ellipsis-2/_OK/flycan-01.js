//使用 querySelectorAll 可以取出全部名為 .words 節點
//但是使用 querySelectorAll 之後 div_words 就會自動變成陣列的型態
var div_words = document.querySelectorAll(".words");

//宣告一個 got_words 陣列來先暫時存放每一筆從 .words 內截取出來的文字
var got_words = [];

// div_words[0] 就代表第一個 .words 節點
// 使用 div_words[0].innerHTML 就會抓出 div 裡面全部的文字和標籤
// 使用 substr(0, 190) 會抓出 div 裡面第 0 個到第 190 個文字和標籤
// 最後將抓出來的 190 個文字和標籤先存放到 got_words[0] 陣列抽屜裡面  
got_words[0] = div_words[0].innerHTML.substr(0, 190);

// 然後再將 got_words[0] 抽屜裡面文字放回到 div_words[0] 裡面
// div_words[0] 就代表第一個 .words 節點
// 後面再加上 "..." 符號
div_words[0].innerHTML = got_words[0] + "...";


