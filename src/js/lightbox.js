export default class Lightbox {
    constructor(gallery) {
        this.closeModal = this.closeModal.bind(this);
        this.gallery = [...gallery.querySelectorAll('.lightbox__item')];
        this.closeBtn = gallery.querySelector('.close.cursor');
        this.containerImg = gallery.querySelector('.containerImg');
        this.allImages = gallery.querySelectorAll('.column__image');
        this.next = gallery.querySelector('.next');
        this.prev = gallery.querySelector('.prev');
        this.modal = document.getElementById('myModal');
        this.navSticky = document.querySelector('.navigation');
        this.scrollBtn = document.querySelector('.scrollTop');
        this.bodyStyle = document.querySelector('body');
        this.indeks = 0; 
        this.initOpenModal();
    }
    
    initOpenModal() {
        this.allImages.forEach((img, indeks) => img.addEventListener('click', () => this.changePhoto(indeks)));
        this.next.addEventListener('click', () => this.changePhoto(this.indeks + 1));
        this.prev.addEventListener('click', () => this.changePhoto(this.indeks - 1));
        this.closeBtn.addEventListener('click', this.closeModal);
        this.gallery.forEach((photo, i) => {
            photo.addEventListener('click', (e) => {
                //opening lightbox
                this.openModal();
                this.containerImg.src = e.target.src;
                this.indeks = i;
                this.allImages[i].classList.add('selected')
            })
        })
    }

    openModal() {
        //opening lightbox
        this.modal.classList.add('isOpen')
        
        //hiding scroll on body
        this.bodyStyle.style.overflow = 'hidden';
        
        //giving to navbar and button position relative to not bothering us
        this.navSticky.style.position = 'relative';
        this.scrollBtn.style.position = 'relative';
    }
    closeModal() {
        //closing lightbox
        this.modal.classList.remove('isOpen');
        this.allImages[this.indeks].classList.remove('selected');
        //giving to navbar and button position fixed to show it
        this.navSticky.style.position = "";
        this.scrollBtn.style.position = "fixed";
        this.bodyStyle.style.overflow = "auto";
    }
    changePhoto(index) {
        console.log(this.indeks)
        this.allImages[this.indeks].classList.remove('selected')
        this.indeks = index;
        this.containerImg.classList.add('fadeOut');
        //reseting all column-container opacity
        if (this.indeks == this.allImages.length) {
            this.indeks = 0;
        }
        if (this.indeks < 0) {
            this.indeks = this.allImages.length -1;
        }
        //setting img to caption-container and to column-container opacity
        setTimeout(() => {
            //setting img to caption-container and to column-container opacity
            this.containerImg.src = this.allImages[this.indeks].src;
            this.containerImg.classList.remove('fadeOut');
            this.allImages[this.indeks].classList.add('selected')
        }, 200)
    }
}
