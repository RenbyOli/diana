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
            nav = document.querySelector(navSelector);

        btn.addEventListener('click', () => {
            nav.classList.add(openNavClass);
            document.querySelector('body').style = 'height:100%;overflow:hidden';
        })

        nav.addEventListener('click', (e) => {
            console.log(e.target.classList.contains('nav__close-zone'));
            if(e.target.getAttribute('id') == 'closeNav' || e.target.classList.contains('nav__close-zone')) {
                nav.classList.remove(openNavClass);
                document.querySelector('body').style = '';
            }
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

        if(btn !== null) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('filter-acc__menu--open');
                btn.classList.toggle('filter-acc__title--open');
            });
        }
    }
    filterAcc();

    //Rand size illustration blocks
    function superCards(countElRow) {
        let blocks = document.querySelectorAll('.illustration__items');
        let windowWidth = document.documentElement.clientWidth;

        if(windowWidth < 1023 && windowWidth > 620) {
            countElRow = countElRow - 2;
        } if(windowWidth < 620) {
            countElRow = countElRow - 4;
        }
    
        blocks.forEach((item) => {
            let n = 0,
                j = 0;

            item.querySelectorAll('.illustration__item').forEach((item, i) => {
                n++;
                if( i%countElRow == 0 && i !== 0) n--;
                if( (n%2 == 0) || n == 0) {
                    item.classList.add('illustration__item--big');
                    if( j > countElRow-1) {
                        item.style.marginTop = '-55px';
                    }
                }
                if( j == countElRow*2 ) j = 0;
                j++;
            })
        })
    }
    superCards(6);

    //Blog cards

    let articlePreview = document.querySelectorAll('.blog__preview');
    let h = 1;
    articlePreview.forEach((item, i) => {
        if(h > 4) h = 1

        if(h<=2) {
            item.classList.add('blog__preview--left');
        }
        if(h>2 && h<=4) {
            item.classList.add('blog__preview--right');
        }
        
        h++;
    })

    //Gallery

    function gallery(selector) {
        let item = document.querySelectorAll(selector);

        item.forEach((item, i) => {
            item.setAttribute('id', 'galleryBlock' + i);
            lightGallery(document.querySelector('#' + item.getAttribute('id')));
        });
    }

    gallery('.illustration__items');

})