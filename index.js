document.addEventListener('DOMContentLoaded', () =>{

    const burger = document.querySelector('.header__burger');
    const header__list = document.querySelector('.header__list');
    const body = document.querySelector('body');
    const header = document.querySelector('header');


    burger.addEventListener('click', () => {

        burger.classList.toggle('active');
        header__list.classList.toggle('active');
        body.classList.toggle('lock');
    });


});