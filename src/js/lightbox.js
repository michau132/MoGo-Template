function lightbox() {
    const gallery = document.querySelectorAll('.main-map__row__col-4-12__row-4-12 li');
    const closeBtn = document.querySelector('.close.cursor');
    const cntImg = document.querySelector('#caption');
    const allViewImg = document.querySelectorAll('.column-container img');
    const opacity = 0.2;
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const navSticky = document.querySelector('.navigation');
    const scrollBtn = document.querySelector('.scrollTop');
    let indeks ;

    function openModal() {
        //opening lightbox
        document.getElementById('myModal').style.display = "block";

        //giving to navbar and button position relative to not bothering us
        navSticky.style.position = 'relative';
        scrollBtn.style.position = 'relative';
    }
    function closeModal() {
        //closing lightbox
        document.getElementById('myModal').style.display = "none";

        //giving to navbar and button position fixed to show it
        navSticky.style.position = "fixed";
        scrollBtn.style.position = "fixed";
    }
    function loopAllImgs(img, ind) {
        //setting to targeted in caption-contaier img an opacity
        if (cntImg.src === img.src) {
            img.style.opacity = opacity;
        }

        //setting event to change photo in caption-container
        //and column-container opacity to selected img
        img.addEventListener('click', function (e) {
            allViewImg.forEach(img => (img.style.opacity = 1));
            cntImg.src = e.target.src;
            this.style.opacity = opacity;
            indeks = ind;
        })
    }
    function nextElement() {

        //reseting all column-container opacity
        allViewImg.forEach(img => (img.style.opacity = 1));
        indeks = indeks + 1;
        if (indeks == allViewImg.length) {
            indeks = 0;
        }

        //setting img to caption-container and to column-container opacity
        cntImg.src = allViewImg[indeks].src;
        allViewImg[indeks].style.opacity = opacity;
    }
    function previousElement() {
        //reseting all column-container opacity
        allViewImg.forEach(img => (img.style.opacity = 1));

        if (indeks == 0) {
            indeks = allViewImg.length;
        }
        indeks = indeks - 1;

        //setting img to caption-container and to column-container opacity
        cntImg.src = allViewImg[indeks].src;
        allViewImg[indeks].style.opacity = opacity;
    }

    gallery.forEach((photo, i) => {
        photo.addEventListener('click', function (e) {
            //opening lightbox
            openModal();



            //setting which photo would be opended in container
            cntImg.src = e.target.src;

            //getting photo indeks from array
            indeks = i;

            //loop through all images at gallery (they are showing at the bottom of
            //lightbox
            allViewImg.forEach(loopAllImgs);

            //add event to close lightbox
            closeBtn.addEventListener('click', closeModal);

            //add to buttons previous next events
            next.addEventListener('click', nextElement);
            prev.addEventListener('click', previousElement);
    })
})
}
export {lightbox};
