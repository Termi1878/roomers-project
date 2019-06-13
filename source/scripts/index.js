const ico = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const burgerHome = document.querySelector('.burger--home');
const logo = document.querySelector('.logo svg');
ico.addEventListener('click', () => {
    ico.classList.toggle('active');
    if (menu) {
        menu.classList.toggle('none__menu');
    }
    if (navbar) {
        navbar.classList.toggle('display__none');
    }
    if (burgerHome) {
        burgerHome.classList.toggle('burger--white')
    };
    if (logo) {
        logo.classList.toggle('logo__invert');
    }
});
const basketCount = document.querySelectorAll('.basket__item').length;
const basket = document.querySelector('.basket__count span');
if (basket) {
    basket.innerText += basketCount;
}
const priceCheckout = document.querySelector('.price__result');
const itemsCalc = document.querySelectorAll('.basket__content .price__calc');
let count = 0;
itemsCalc.forEach(e => {
    count += parseInt(e.innerText);
});
if (priceCheckout) {
    priceCheckout.innerText = count.toString();
}
var itemsPrice = document.querySelectorAll('.basket .price__calc');

itemsPrice.forEach(e => {
    e.innerText += ' zł';
});