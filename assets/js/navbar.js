const burger = document.querySelector('.nav_burger');
const navbar = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_item');


const containerSize = document.querySelector('.nav_container').clientWidth;

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  navbar.classList.toggle('nav_list-open');
});


  links.forEach(link => {
    link.addEventListener('click', () => {
      if(containerSize < 1024) {
        burger.classList.toggle('toggle');
        navbar.classList.toggle('nav_list-open');
      }
    })
  });


  for (let i = 0; i < links.length; i++ ) {
    links[i].addEventListener('click', () => {
      let current = document.getElementsByClassName('active');
      current[0].classList.remove('active');
      links[i].classList.add('active');
      
    })
  }

