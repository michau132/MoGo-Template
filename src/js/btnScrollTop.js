export default function btnScrollTop() {
    const scrollBtn = document.querySelector('.scrollTop');
    window.addEventListener('scroll', function () {
        if(window.scrollY > 510 && window.innerWidth > 500) {
            scrollBtn.style.display = 'block';
            scrollBtn.classList.remove('zoomOutDown');
        } else {
            scrollBtn.classList.add('zoomOutDown');
        }
    });

    scrollBtn.onclick = function () {
        scrollTo(document.documentElement, 0, 1250);
    }

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function(){
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    
    Math.easeInOutQuad = function (currentTime, startValue, changeInValue, duration) {
        currentTime /= duration/2;
        if (currentTime < 1) return changeInValue/2*currentTime*currentTime + startValue;
        currentTime--;
        return -changeInValue/2 * (currentTime*(currentTime-2) - 1) + startValue;
    };
}
export {btnScrollTop};
