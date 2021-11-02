const user_logo = document.querySelector('#nav-logo');
const drop_down = document.querySelector('.drop-down-menu');

user_logo.addEventListener('click' , () => {
    drop_down.classList.toggle('drop-down-menu-display');
});