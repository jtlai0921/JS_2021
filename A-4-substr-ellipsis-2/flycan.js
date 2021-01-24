let div_words = document.querySelectorAll(".words");
let get_words = [];
for (let i = 0; i < div_words.length; i++) {
    get_words[i] = div_words[i].innerHTML.substr(0, 190);
    div_words[i].innerHTML = get_words[i] + "....";
}
