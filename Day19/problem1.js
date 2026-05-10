// Way 1
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', (e) => {
     menu.classList.add('is-active');
     toggle.classList.replace('fa-bars','fa-x');
    e.stopPropagation();
});
document.addEventListener('click', () => {
    menu.classList.remove('is-active');
    toggle.classList.replace('fa-x','fa-bars');
});




