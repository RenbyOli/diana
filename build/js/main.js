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