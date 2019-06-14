const ico = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const burgerHome = document.querySelector('.burger--home');
const logo = document.querySelector('.logo svg');
const basketCount = document.querySelectorAll('.basket__item').length;
const basket = document.querySelector('.basket__count span');
const priceCheckout = document.querySelector('.price__result');
const itemsCalc = document.querySelectorAll('.basket__content .price__calc');
const itemsPrice = document.querySelectorAll('.basket .price__calc');
const wishList = document.querySelector('.wishlist');
if(wishList){
    wishList.addEventListener('click', () =>{
        const wishRed = document.querySelectorAll('.st0');
        wishList.classList.toggle('.wishBig')
        wishRed.forEach(e =>{
            e.classList.toggle('wishred');
        })
    });
}
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

if (basket) {
    basket.innerText += basketCount;
}
let count = 0;
itemsCalc.forEach(e => {
    count += parseInt(e.innerText);
});
if (priceCheckout) {
    priceCheckout.innerText = count.toString();
}
itemsPrice.forEach(e => {
    e.innerText += ' zł';
});