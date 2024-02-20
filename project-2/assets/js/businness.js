var swiper = new Swiper(".brands-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

    },
    pagination: {
        el: ".swiper-pagination",
    },
});

let famousSearchWords = document.querySelectorAll('.famous-search-words ul li');
let inputArea = document.querySelector('#search-catalog form input');
famousSearchWords.forEach(word => {
    word.addEventListener("click", function () {
        let input = "";
        this.classList.add("active");
        input = this.innerText;
        inputArea.value = input
    })
});

let mainNavbar = document.querySelector(".main-navbar");
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        mainNavbar.classList.add("active-navbar");
    } else {
        mainNavbar.classList.remove("active-navbar")
    }
});