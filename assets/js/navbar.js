const burger = document.querySelector('.nav_burger');
const navbar = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_item');

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  navbar.classList.toggle('nav_list-open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navbar.classList.toggle('nav_list-open');
  })
});
