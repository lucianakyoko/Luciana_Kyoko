const slide = document.querySelectorAll('.slide_items');
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

let counter = 0;
const slideSize = slide[counter].clientWidth;

nextBtn.addEventListener('click', () => {
  if(counter >= slide.length)  return;

    counter++;
    slide[counter].style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
    slide[counter - 1].style.opacity = '0'; 
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;

  counter--;
  slide[counter + 1].style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
  slide[counter].style.opacity = '1';
});
