console.log('it works');

const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

const item = document.querySelectorAll('.menu-nav-items');

let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        item.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        item.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

menuButton.addEventListener('click', toggleMenu);
