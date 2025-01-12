const juraElement = document.querySelector('.jura');
const bigLinkElement = document.querySelector('.big.link');

juraElement.addEventListener('animationend', () => {
  bigLinkElement.classList.add('show');
});
