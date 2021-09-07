const menu_click = document.querySelector('#mobile-menu');
const menu_links = document.querySelector('.navbar__menu');
//display menu
const mobileMenu = () => {
    menu_click.classList.toggle('is-active');
    menu_links.classList.toggle('active')
}
menu_click.addEventListener('click', mobileMenu)