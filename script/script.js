const user_logo = document.querySelector('#nav-logo');
const drop_down = document.querySelector('.drop-down-menu');
const toggle_color = document.querySelector('.toggle-color')
const colors_menu = document.querySelector('.colors-menu');
const back = document.querySelector('.back')

user_logo.addEventListener('click', () => {
    drop_down.classList.toggle('drop-down-menu-display');
    if (colors_menu.classList.contains('display-flex')) {
        colors_menu.classList.toggle('display-flex')
    }

});

toggle_color.addEventListener('click', () => {
    // drop_down.classList.toggle('drop-down-menu-display');
    colors_menu.classList.toggle('display-flex')
})

back.addEventListener('click', () => {
    colors_menu.classList.toggle('display-flex')
})