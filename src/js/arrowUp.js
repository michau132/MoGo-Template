export default function arrowUp() {
    const parentMetier = document.querySelector('#whatWeDo');
    const allMetiers = Array.from(parentMetier.children)
    const banners = Array.from(parentMetier.querySelectorAll('.metier__banner'));
    let prevIndex = 0;
    banners.forEach((banner, index) => {

        banner.addEventListener('click',() => {
            const text = allMetiers[index];
            const isAllElementsAreHidden = allMetiers.every(item => !item.classList.contains('visible'))
            if(allMetiers[prevIndex].classList.contains('visible')) {
                allMetiers[prevIndex].classList.remove('visible')
            }
            if(prevIndex !== index || isAllElementsAreHidden) {
                text.classList.add('visible')
            }
            prevIndex = index;
        })
    })
}
