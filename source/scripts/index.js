const ico = document.querySelector('.burger');
        ico.addEventListener('click', function () {
            this.classList.toggle('active');
            document.querySelector('.menu').classList.toggle('none__menu');
            document.querySelector('.navbar').classList.toggle('display__none');
            document.querySelector('.burger--home').classList.toggle('burger--white');
            document.querySelector('.logo svg').classList.toggle('logo__invert');
        });
        var basketCount = document.querySelectorAll('.basket__item').length;
        document.querySelector('.basket__count span').innerText += basketCount;
        document.querySelector
        var priceCheckout = document.querySelector('.price__result');
        var itemsCalc = document.querySelectorAll('.basket__content .price__calc');
        var count = 0;
        for (let i = 0; i < itemsCalc.length; i++) {
            count += parseInt(itemsCalc[i].innerText);
        }
        priceCheckout.innerText = count.toString();
        var itemsPrice = document.querySelectorAll('.basket .price__calc');
        for (let i = 0; i < itemsPrice.length; i++) {
            itemsPrice[i].innerText += ' zł';
        }