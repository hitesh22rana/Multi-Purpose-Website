const user_logo = document.querySelector('#nav-logo');
const drop_down = document.querySelector('.drop-down-menu');
const toggle_color = document.querySelector('.toggle-color');
const colors_menu = document.querySelector('.colors-menu');
const back = document.querySelector('.back');
const color_scheme = document.querySelectorAll('.colors');
const body = document.body;
const bots_h3 = document.querySelectorAll('.cg');
const head = document.querySelectorAll('.head');
const container_top = document.querySelector('#container-top');
const bottom = document.querySelector('.bottom');
const d = document.documentElement;
const search_icon = document.querySelector('.search-icon');
const nav_search_bar = document.querySelector('.nav-bar-search-bar-container');
const search_bar_container = document.querySelector('.search-bar-container')
const site_search = document.querySelector('#site-search')

const colors_array = ['Red', 'Pink', 'Purple', 'Blue', 'Green', 'Yellow', 'Orange']
const background_array = ['linear-gradient( to bottom, rgba(255, 101, 102, 0.3) 10.8%, rgba(205, 180, 219, 0.5) 90%)',
    'linear-gradient( to bottom, rgba(250, 138, 187, 0.3)  10.8%, rgba(255, 201, 202, 0.3) 90%)',
    'linear-gradient( to bottom, rgba(137, 87, 255, 0.25) 10.8%, rgba(205, 180, 219, 0.5) 90%)',
    'linear-gradient( to bottom, rgba(0, 187, 255, 0.15) 10.8%, rgba(205, 180, 219, 0.5) 90%)',
    'linear-gradient( to bottom, rgba(0, 204, 137, 0.2) 10.8%, rgba(220, 240, 249, 0.8) 90%)',
    'linear-gradient( to bottom, rgba(255, 187, 0, 0.2) 10.8%, rgba(220, 240, 0, 0.15) 90%)',
    'linear-gradient( to bottom, rgba(255, 107, 0, 0.3) 10.8%, rgba(255, 101, 102, 0.3) 90%)'
]


user_logo.addEventListener('click', () => {
    drop_down.classList.toggle('drop-down-menu-display');
    user_logo.classList.toggle('nav-log-hover-transition');
    if (colors_menu.classList.contains('display-flex')) {
        colors_menu.classList.toggle('display-flex')
    }

});

toggle_color.addEventListener('click', () => {
    colors_menu.classList.toggle('display-flex')
})

back.addEventListener('click', () => {
    colors_menu.classList.toggle('display-flex')
})

for (let individual_color of color_scheme) {
    individual_color.addEventListener('click', (e) => {
        let name = e.target.outerText;
        let new_color = document.querySelector('.color-toggle-changed-color');
        let login_button_color = document.querySelector('.color-change');

        for (let i = 0; i < colors_array.length; i++) {
            if (name == colors_array[i]) {
                new_color.style.backgroundColor = `var(--${name.toLowerCase()}-color)`;
                new_color.style.boxShadow = `0px 0px 4px 1px var(--${name.toLowerCase()}-color)`;
                login_button_color.style.backgroundColor = `var(--${name.toLowerCase()}-color)`;
                search_icon.style.backgroundColor = `var(--${name.toLowerCase()}-color)`;
                body.style.backgroundImage = `${background_array[i]}`;
                document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", `background: var(--${name.toLowerCase()}-color)`);
                for (let b of bots_h3) {
                    b.style.borderBottom = `1px solid var(--${name.toLowerCase()}-color)`;
                }
                for (let h of head) {
                    h.style.color = `var(--${name.toLowerCase()}-color)`
                }
            }
        }

    })
}

window.addEventListener('scroll', (e) => {
    container_top.style.background = '#ffffffE6';

    if (d.scrollTop > 140) {
        nav_search_bar.style.opacity = '1';
        search_bar_container.style.opacity = '0';
        container_top.style.opacity = '0.98';


    } else {
        nav_search_bar.style.opacity = '0';
        search_bar_container.style.opacity = '1';
        let num = (d.scrollTop / 145);
        container_top.style.opacity = `${num}`;

    }
    colors_menu.style.transform = 'translate(0,25px)';
    drop_down.style.transform = 'translate(0,25px)';
    container_top.style.backdropFilter = 'blur(30px)';
    if (d.scrollTop === 0) {
        container_top.style.background = 'transparent';
        container_top.style.opacity = '1';
        colors_menu.style.transform = 'translate(0,0)';
        drop_down.style.transform = 'translate(0,0)';
        nav_search_bar.style.opacity = '0';
    }
})