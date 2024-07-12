let slideIndex = 0;
let slideInterval;

function startAutoScroll(intervalTime = 5000) {
  slideInterval = setInterval(autoScroll, intervalTime);
}

function stopAutoScroll() {
  clearInterval(slideInterval);
}

function autoScroll() {
  slideIndex++;
  const slides = document.querySelectorAll('.featured__product-container');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.featured__product-container');
  const dots = document.querySelectorAll('.dot');

  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].style.display = 'flex';
  dots[index].classList.add('active');
}

function setupSlider() {
  startAutoScroll();

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slideIndex = index;
      showSlide(slideIndex);
      stopAutoScroll();
    });
  });
}

export { setupSlider };
