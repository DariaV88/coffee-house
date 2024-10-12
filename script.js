const burger = document.querySelector('.header__right');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active');
  burger.classList.toggle('header__right--active');
});
