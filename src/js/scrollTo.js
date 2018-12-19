const smoothScroll = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

const getElementOffset= (id) => {
  const elementOffset = document.querySelector(id)
  return smoothScroll(elementOffset)
}

export default function scrollTo() {
  const navElements = document.querySelectorAll('.navigation__link');
  const linksWithLocation =  [...navElements].filter(item => item.hash);
  const logo = document.querySelector('.logo__link');
  const hamburgerCheckbox = document.querySelector('#checkbox');
  linksWithLocation.push(logo);
  linksWithLocation.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    getElementOffset(e.target.hash);
    hamburgerCheckbox.checked = false;
  }))
}
