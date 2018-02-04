function arrowUp() {
    const arrow = document.querySelectorAll('.fa-angle-down');

    arrow.forEach(item => {

        return item.addEventListener('click', function () {
            if ( this.parentElement.parentElement.lastElementChild.classList.contains('hidden') ) {
                this.parentElement.parentElement.lastElementChild.classList.remove('hidden');
                this.parentElement.parentElement.lastElementChild.classList.add('visible');
                this.classList.add('up');
            } else {
                this.parentElement.parentElement.lastElementChild.classList.add('hidden');
                this.parentElement.parentElement.lastElementChild.classList.remove('visible');
                this.classList.remove('up');
            }

        })
    })
}
export {arrowUp};