export default class Slider {
  constructor(slider) {
    this.slider = slider;
    this.prev = slider.querySelector('.prev');
    this.next = slider.querySelector('.next');
    this.slideTrack = slider.querySelector('.slide-track').children;
    this.indeks = 0;
    this.interval = setInterval(() => {
      this.changeSlide(this.indeks + 1)
    }, 5000)
    this.initSlider();
  }
  
  initSlider() {
    this.prev.addEventListener('click', () => this.changeSlide(this.indeks - 1))
    this.next.addEventListener('click', () => this.changeSlide(this.indeks + 1))
    
  }
  changeSlide(indeks) {
    clearInterval(this.interval)
    this.slideTrack[this.indeks].classList.remove('isActive')
    this.slideTrack[this.indeks].classList.add('visuallyhidden')
    this.indeks = indeks;
    if (this.indeks == this.slideTrack.length) {
      this.indeks = 0;
    }
    if (this.indeks < 0) {
        this.indeks = this.slideTrack.length -1;
    }
    this.slideTrack[this.indeks].classList.add('isActive')
    this.slideTrack[this.indeks].classList.remove('visuallyhidden')
    this.interval = setInterval(() => {
      this.changeSlide(this.indeks + 1)
    }, 5000)
  }
}
