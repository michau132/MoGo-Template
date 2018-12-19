const wrapper = document.querySelector('#counters');
const options = {
  root: null,
  treshold: 1.3,
}
const counters = document.querySelectorAll('.counters__count');
let isScrolled = false;
function counter(element) {
  const counterValue = element.innerText;
  const intervalTiming = 3300 / Number(element.innerText) 
  
  let count = 0
  const interval = setInterval(() => {
  if(count >= counterValue) {
      clearInterval(interval)
  } else {
      count++
      element.innerText = count
  }
  }, intervalTiming);
}
  
export default function counting() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0 && !isScrolled) {
        isScrolled = true;
        counters.forEach(counter)
      }
    })
  } , options)
  observer.observe(wrapper)
}
