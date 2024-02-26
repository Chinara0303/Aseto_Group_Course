const continueBtn = document.querySelector('.continue-btn');
const progressBarItems = document.querySelectorAll('.progress-bar-item');
const contents = document.querySelectorAll('.content');

let currentIndex = 1;

continueBtn.addEventListener('click', function () {
        contents.forEach(content => {
            if (content.getAttribute('data-index') == currentIndex) {
                content.classList.add('de-active-content');
            }
        });
        progressBarItems.forEach(item => {
            if (item.getAttribute('data-index') == currentIndex) {
                item.classList.remove('active-bar');
                item.classList.add('checked');
            }
        });

        currentIndex++;
        if (currentIndex > contents.length) {
            currentIndex = 1;
        }
        contents.forEach(content => {
            if (content.getAttribute('data-index') == currentIndex) {
                content.classList.remove('de-active-content');
            }
        });
        progressBarItems.forEach(item => {
            if (item.getAttribute('data-index') == currentIndex) {
                item.classList.add('active-bar');
            }
        });
});
