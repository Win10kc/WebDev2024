let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// typing text code
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain','Strength Training','Fat Lose','Weight Lifting','Running'],
    typeSpeed: 60,
    backSpeed:60,
    back: 1000,
    loop:true,
  });