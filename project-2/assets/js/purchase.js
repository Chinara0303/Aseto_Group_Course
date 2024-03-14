const continueBtn = document.querySelector('.continue-btn');
const progressBarItems = document.querySelectorAll('.progress-bar-item');
const contents = document.querySelectorAll('.content');
const subscriptionNumberInput = document.querySelector('.subscription-number-input');
const subscriptionNumberArea = document.querySelector('.subscription-number p').nextElementSibling;
const totals = document.querySelectorAll('.total-price');
const annualPayment = document.querySelector('.annual-payment');
const quarterlyPayment = document.querySelector('.quarterly-payment');

const annualRadioBtn = document.querySelector('.radio-item.annual');
const quarterlyRadioBtn = document.querySelector('.radio-item.quarterly');

const teamPlanPrice = document.querySelector('.team-plan .price').innerText;
const annualPaymentPrice = document.querySelector('.annual-payment-price');
const todayPaymentPrice = document.querySelector('.today-payment-price');
const quarterlyPaymentPrice = document.querySelector('.quarterly-payment-price');

let currentIndex = 1;
let totalPrice = 0;
let todayPrice = 0;

function calculateAnnual() {
    totalPrice = subscriptionNumberInput.value * teamPlanPrice;
    todayPrice = subscriptionNumberInput.value * teamPlanPrice;

    totals.forEach(total => {
        total.innerText = `${totalPrice}`;
    })
    annualPaymentPrice.innerText = `${totalPrice}`;
    todayPaymentPrice.innerText = `${todayPrice}`;
    quarterlyPaymentPrice.innerText = `${todayPrice}`;
}
function calculateQuarterly() {
    totalPrice = subscriptionNumberInput.value * teamPlanPrice;
    todayPrice = (subscriptionNumberInput.value * teamPlanPrice) / 4;

    totals.forEach(total => {
        total.innerText = `${totalPrice}`;
    })
    annualPaymentPrice.innerText = `${totalPrice}`;
    todayPaymentPrice.innerText = `${todayPrice}`;
    quarterlyPaymentPrice.innerText = `${todayPrice}`;
}
annualRadioBtn.addEventListener("click", function () {
    if (!annualRadioBtn.classList.contains("active-radio")) {
        annualRadioBtn.classList.add('active-radio');
        quarterlyRadioBtn.classList.remove('active-radio');
        quarterlyPayment.classList.add('d-none');
        annualPayment.classList.remove('d-none');
        calculateAnnual();
    }
    else {
        calculateAnnual();
    }
});

quarterlyRadioBtn.addEventListener("click", function () {
    if (!quarterlyRadioBtn.classList.contains("active-radio")) {
        quarterlyRadioBtn.classList.add('active-radio');
        annualRadioBtn.classList.remove('active-radio');
        quarterlyPayment.classList.remove('d-none');
        annualPayment.classList.add('d-none');

        calculateQuarterly();
    }
});

continueBtn.addEventListener('click', function () {
    if (subscriptionNumberInput.value !== "") {
        subscriptionNumberArea.innerText = `x${subscriptionNumberInput.value}`;

        if (quarterlyRadioBtn.classList.contains("active-radio")) {
            calculateQuarterly()
        }
        if (annualRadioBtn.classList.contains("active-radio")) {
            calculateAnnual()
        }
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
    }
    else {
        return;
    }

});

$(function () {
    $('[data-bs-toggle="dropdown"]').click(function () {
        let dropdownEl = $(this).next();
        dropdownEl.toggle("block");
    });

    $(document).on("click", function (e) {
        if (!!!e.target.closest('[data-bs-toggle="dropdown"]')) {
            let displayValue = $('.dropdown-menu').css("display");
            if (displayValue === "block") {
                $('.dropdown-menu').css("display", "none");
                $('.dropdown-menu').css("transition", "all .4s");
            }
        }
    })
})

