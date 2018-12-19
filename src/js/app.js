import Lightbox from "./lightbox.js";
import scrollTo from './scrollTo';
import stickyNavBar from "./nav.js";
import arrowUp from "./arrowUp.js"; 
import btnScrollTop from "./btnScrollTop.js";
import counting from "./counting.js";
import Slider from "./slider.js";
import updateInView from "./inView.js";


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#lightbox');
    const sliders = [...document.querySelectorAll('.slider')];
    const mainSections = [...document.querySelectorAll('.slide-from-left')];
    new Lightbox(modal);
    stickyNavBar();
    btnScrollTop();
    arrowUp();
    scrollTo();
    counting();
    sliders.forEach(slider => new Slider(slider))
    window.addEventListener('load', () => {
        document.querySelector('.loading').style.display = "none";
    });
    window.addEventListener('scroll', () => {
        mainSections.forEach(section => updateInView(section))   
    })
    
    
    
    
    
  
})






