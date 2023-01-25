"use strict";

window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};