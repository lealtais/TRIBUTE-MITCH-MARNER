const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length;
let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}vw)`;
}


function nextSlide() {
  index = (index + 1) % totalSlides; 
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides; 
  updateCarousel();
}


setInterval(nextSlide, 4000); 
