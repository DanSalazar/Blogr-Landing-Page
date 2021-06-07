const navList = document.querySelectorAll('.nav__title');
const navSubList = document.querySelectorAll('.nav__sublist');
const iconsNav = document.querySelectorAll('.nav__icon');
const hambuger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');

hambuger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambuger.classList.toggle('open');
})

navList.forEach((element, index) => {
    element.addEventListener('click', () => {
        navSubList[index].classList.toggle('show');
        iconsNav[index].classList.toggle('reverse');
    })
})