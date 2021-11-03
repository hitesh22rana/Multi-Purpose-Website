const user_logo = document.querySelector('#nav-logo');
const drop_down = document.querySelector('.drop-down-menu');
const toggle_color = document.querySelector('.toggle-color')
const colors_menu = document.querySelector('.colors-menu');
const back = document.querySelector('.back')
const color_scheme = document.querySelectorAll('.colors');
const body = document.body;

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

color_scheme.forEach(individual_color => {
    individual_color.addEventListener('click', (e)=> {
        let name = e.target.outerText;
        let new_color = document.querySelector('.color-toggle-changed-color');
        let login_button_color = document.querySelector('.color-change');

        if(name === 'Red') {
            new_color.style.backgroundColor = 'var(--red-color)';  
            new_color.style.boxShadow = '0px 0px 4px 1px var(--red-color)';
            login_button_color.style.backgroundColor = 'var(--red-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 101, 102, 0.3) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
        }

        else if(name === 'Pink') {
            new_color.style.backgroundColor = 'var(--pink-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--pink-color)';  
            login_button_color.style.backgroundColor = 'var(--pink-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(250, 138, 187, 0.3)  10.8%, rgba(255, 201, 202, 0.3) 90%)';
        }

        else if(name === 'Purple') {
            new_color.style.backgroundColor = 'var(--purple-color)';  
            new_color.style.boxShadow = '0px 0px 4px 1px var(--purple-color)';
            login_button_color.style.backgroundColor = 'var(--purple-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(137, 87, 255, 0.25) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
        }

        else if(name === 'Blue') {
            new_color.style.backgroundColor = 'var(--blue-color)';  
            new_color.style.boxShadow = '0px 0px 4px 1px var(--blue-color)';
            login_button_color.style.backgroundColor = 'var(--blue-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(0, 187, 255, 0.15) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
        }

        else if(name === 'Green') {
            new_color.style.backgroundColor = 'var(--green-color)';  
            new_color.style.boxShadow = '0px 0px 4px 1px var(--green-color)';
            login_button_color.style.backgroundColor = 'var(--green-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(0, 204, 136, 0.2) 10.8%, rgba(220, 240, 249, 0.8) 90%)';
        }

        else if(name === 'Yellow') {
            new_color.style.backgroundColor = 'var(--yellow-color)';  
            new_color.style.boxShadow = '0px 0px 4px 1px var(--yellow-color)';
            login_button_color.style.backgroundColor = 'var(--yellow-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 187, 0, 0.2) 10.8%, rgba(220, 240, 0, 0.15) 90%)';
        }

        else if(name == 'Orange') {
            new_color.style.backgroundColor = 'var(--orange-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--orange-color)';
            login_button_color.style.backgroundColor = 'var(--orange-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 107, 0, 0.3) 10.8%, rgba(255, 101, 102, 0.3) 90%)';
        }
        
    }); 
});