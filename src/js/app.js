
const navSticky = document.querySelector('.main-page__header');

window.addEventListener('scroll', function () {
    if(window.scrollY > 50) {
        navSticky.classList.add('sticky');
    } else {
        navSticky.classList.remove('sticky');
    }
});



