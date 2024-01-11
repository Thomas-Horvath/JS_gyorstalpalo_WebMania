const nav = document.getElementById('nav');
const menu = document.querySelector('#hamburgerMenu');

menu.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    menu.classList.toggle('fi-align-justify');
    menu.classList.toggle('fi-arrow-left');
});