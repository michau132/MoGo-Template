export default function stickyNavBar() {
    const navSticky = document.querySelector('.navigation');

    window.addEventListener('scroll', function () {
        if(window.scrollY > 50) {
            navSticky.classList.add('sticky');
        } else {
            navSticky.classList.remove('sticky');
        }

    });
}
