
let currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
// let mainNavLinks = document.querySelectorAll("header .main-navbar .navbar li");
let topbarNavLinks = document.querySelectorAll('header .topbar .topbar-navbar li');

// for (var i = 0; i < mainNavLinks.length; i++) {
//     if (mainNavLinks[i].firstElementChild.getAttribute("href") == currentPage) {
//         mainNavLinks[i].classList.add('active-link')
//         break;
//     }
// }

for (var i = 0; i < topbarNavLinks.length; i++) {
    if (topbarNavLinks[i].firstElementChild.getAttribute("href") == currentPage) {
        topbarNavLinks[i].classList.add('active-link')
        break;
    }
}


let burgerMenuIcon = document.querySelector('.burger-menu-icon');
let closeIcon = document.querySelector('.close-icon');
let responsiveNavbar = document.querySelector('.responsive-navbar');
let body = document.querySelector("body");

burgerMenuIcon.addEventListener('click', function () {
    closeIcon.classList.add('show-close-icon')
    burgerMenuIcon.classList.add('hidden-burger-menu-icon');
    responsiveNavbar.classList.add("active-responsive-navbar")
    body.style.overflow = "hidden"
})

closeIcon.addEventListener('click', function () {
    closeIcon.classList.remove('show-close-icon')
    burgerMenuIcon.classList.remove('hidden-burger-menu-icon');
    responsiveNavbar.classList.remove("active-responsive-navbar");
    body.style.overflow = "unset"
})

let navbarLinks = document.querySelectorAll('.responsive-navbar .navbar-link');

navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener("click", function () {
        this.nextElementSibling
            .classList.toggle('active-dropdown-area');

        this.lastElementChild
            .querySelector('.fa-chevron-right')
            .classList.toggle('hidden-arrow');

        this.lastElementChild
            .querySelector('.fa-chevron-down')
            .classList.toggle('hidden-arrow');
    })
})