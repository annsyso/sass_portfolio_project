console.log('it works');

const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');

let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');

        showMenu = false;
    }
}


menuButton.addEventListener('click', toggleMenu);
