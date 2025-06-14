const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length;
let index = 0;

function updateSlide() {
  carousel.style.transform = `translateX(-${index * 100}vw)`;
}

function startAutoplay() {
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlide();
  }, 3000); 
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

window.addEventListener('load', startAutoplay);
