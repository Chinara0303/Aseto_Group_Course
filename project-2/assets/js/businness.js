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
$(function () {
    $('.academies-slider-area').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})
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

let mainNavbar = document.querySelector(".main-navbar");
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        mainNavbar.classList.add("active-navbar");
    } else {
        mainNavbar.classList.remove("active-navbar")
    }
});