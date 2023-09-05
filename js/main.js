let page = document.querySelector('.page__header__wrapper');
let themeButton = document.querySelector('.header__nav__toggle');

themeButton.onclick = function() {
  page.classList.toggle('open-menu');
};
