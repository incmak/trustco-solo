const menuBtn = document.querySelector('#menu_btn');
const mainNav = document.querySelector('.main-nav nav');

menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
