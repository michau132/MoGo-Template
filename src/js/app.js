import Lightbox from "./lightbox.js";
import scrollTo from './scrollTo';
import stickyNavBar from "./nav.js";
import arrowUp from "./arrowUp.js"; 
import btnScrollTop from "./btnScrollTop.js";
import counting from "./counting.js";
import Slider from "./slider.js";


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#lightbox');
    new Lightbox(modal);
    stickyNavBar();
    btnScrollTop();
    arrowUp();
    scrollTo();
    counting();
    new Slider(document.querySelector('.slider'))
})






