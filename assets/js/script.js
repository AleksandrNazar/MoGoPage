"use strict";
//Fixed header
window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 620) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};

//Mobile menu
const button = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.nav');

button.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});


//Active link
let navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function(links) {
    links.addEventListener('click', function() {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        })
        this.classList.add('active');
    })
})


//Accordion (wedo section)
const accordionItems = document.querySelectorAll('.accordion__item'); 

accordionItems.forEach(function(item){
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
