window.addEventListener('load', function() {

    function headerFixed(headerClass, fixedHeaderClass, topInterval) {
        var header = document.querySelector('.' + headerClass);
        window.addEventListener('scroll', function() {
            if(document.documentElement.scrollTop > topInterval) {
                header.classList.add(fixedHeaderClass);
            } else {
                header.classList.remove(fixedHeaderClass);
            }
        })
    }
    headerFixed('header', 'header--fixed', 50);

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    function openNavMenu(btnSelector, navSelector, openNavClass, closeNavSelector) {
        let btn = document.querySelector(btnSelector),
            nav = document.querySelector(navSelector),
            close = document.querySelector(closeNavSelector);

        btn.addEventListener('click', () => {
            nav.classList.add(openNavClass);
        })

        close.addEventListener('click', () => {
            nav.classList.remove(openNavClass);
        })
    }
    openNavMenu('#openNav', '#nav', 'nav--open', '#closeNav');

    //Карточки работ

    function setMarginToCard() {
        let card = document.querySelectorAll('.card');
        let wndWidth = document.documentElement.clientWidth;

        if(card !== null) {
            card.forEach((item, i) => {
                if(wndWidth > 1023 && i%3 == 1) {
                    console.log(i);
                    item.style.margin = '70px 30px 70px 30px';
                } if(wndWidth > 620 && wndWidth < 1023 && i%2 == 1) {
                    console.log(i);
                    item.style.margin = '70px 30px 70px 30px';
                }
            })
        }
    }
    setMarginToCard();

    //Аккардеон на странице работ

    function filterAcc() {
        let btn = document.querySelector('.filter-acc__title');
        let menu = document.querySelector('.filter-acc__menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('filter-acc__menu--open');
            btn.classList.toggle('filter-acc__title--open');
        });
    }

    filterAcc();

})