const burger = document.querySelector('.header__right');
const burgerBtn = document.querySelector('.burger');
const burgerBtns = document.querySelector('.navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active');
  burger.classList.toggle('header__right--active');
});

burgerBtns.addEventListener('click', () => {
  burgerBtn.classList.remove('burger--active');
  burger.classList.remove('header__right--active');
});
