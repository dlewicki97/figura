var slideIndex = 1;
var timer = setInterval(() => plusSlides(1), 6000);

showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__dots-item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
  clearInterval(timer);
  this.timer = setInterval(() => plusSlides(1), 6000);

  // let counter = document.querySelector(".counter");
  // counter.classList.toggle("counter");
  // setTimeout(() => counter.classList.toggle("counter"), 20);
}
