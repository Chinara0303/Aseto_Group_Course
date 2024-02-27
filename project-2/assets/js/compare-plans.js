let tableNav = document.querySelector(".table .tr");
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 700) {
        tableNav.classList.add("active-tr");
    } else {
        tableNav.classList.remove("active-tr")
    }
});