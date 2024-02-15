var HumbergerMenu = document.querySelector('.h-menu');
var CloseMenu = document.querySelector('.nav-close-btn');
var Nav = document.querySelector('nav');

function Menu(open){
    if(open){
        Nav.classList.add('open')
    }else{
        Nav.classList.remove('open')
    }
}