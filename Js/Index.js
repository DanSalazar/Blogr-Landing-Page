const navList = document.querySelectorAll('.nav__title');
const navSubNavigation = document.querySelectorAll('.nav__sublist');
const iconsNav = document.querySelectorAll('.nav__icon');
const hambuger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');

hambuger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambuger.classList.toggle('open');
})

navList.forEach((element, index) => {
    element.addEventListener('click', () => {
        navSubNavigation[index].classList.toggle('show');
        
        for(let i = 0; i < navSubNavigation.length; i++){
            if( index !== i ){
                navSubNavigation[i].classList.remove('show');
                iconsNav[i].classList.remove('reverse');
            }
        }

        iconsNav[index].classList.toggle('reverse');
    })
})