const btnMobile = document.querySelector('#btn-menu');
const navOptions =document.querySelector('#nav-menu');

const statusMenu = (e) => {
    if(e.type === 'touchstart') e.preventDefault();
    navOptions.classList.toggle('activeMenuMobile');
}

const closeMenu = (e) => {
   if(e.target.classList.contains('close')) {
        navOptions.classList.toggle('activeMenuMobile');
        console.log('aqui')
    } else if(e.target.classList.contains('logo-name')) {
        navOptions.classList.remove('activeMenuMobile');
    };
}

btnMobile.addEventListener('click', statusMenu);
btnMobile.addEventListener('touchstart', statusMenu);
document.addEventListener('click', closeMenu);
