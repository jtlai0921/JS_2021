var n = 1;

document.querySelector("#flower").src = "images/photo" + n + ".jpg";

function changePic() {

    if (n < 8) {  // 如果 n 小於 8 的時候
        n += 1;   // n 就繼續往前加 1
    } else {      // 否則 (當 n 超過 8 的時候)
        n = 1;    // n 就回到第 1 張
    }

    document.querySelector("#flower").src = "images/photo" + n + ".jpg";
}

document.querySelector("#flower").addEventListener("click", changePic);

