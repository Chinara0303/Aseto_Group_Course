let famousSearchWords = document.querySelectorAll('.famous-search-words ul li');
let inputArea = document.querySelector('#search-catalog form input');
famousSearchWords.forEach(word => {
    word.addEventListener("click", function () {
        let input = "";

        famousSearchWords.forEach(function (item) {
            item.classList.remove('active');
        });

        this.classList.add("active");
        input = this.innerText;
        inputArea.value = input
    })
});
