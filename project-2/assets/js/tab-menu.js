
// tab menu
let tabMenus = document.querySelectorAll(".tab-menu-heading");
let contents = document.querySelectorAll(".section .content");

for (var tabMenu of tabMenus) {
    tabMenu.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        document.querySelector(".tab-menu .active").classList.remove("active");
        this.classList.add("active");
       
        for (let content of contents) {
            content.classList.add("de-active-content");
            if (content.getAttribute("data-index") === index) {
                content.classList.remove("de-active-content");
                content.style.transition = ".3s linear"
            }
        }
    });
}
