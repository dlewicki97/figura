(function () {
  let carousel = document.querySelector(".custom-carousel");

  let pos = { top: 0, left: 0, x: 0, y: 0 };
  let move = false;
  let currentSlide = 0;
  let carouselItems = carousel.querySelectorAll(".item");
  let scrollValue = carousel.scrollWidth / carouselItems.length;

  let mouseDownHandler = (e) => {
    carousel.style.scrollBehavior = "unset";
    move = true;
    carousel.style.cursor = "grabbing";
    carousel.style.userSelect = "none";

    currentSlide = 0;
    pos = {
      left: carousel.scrollLeft,
      top: carousel.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    carousel.addEventListener("mousemove", mouseMoveHandler);
    carousel.addEventListener("mouseup", mouseUpHandler);
  };
  let mouseMoveHandler = (e) => {
    if (!move) return;
    const dx = e.clientX - pos.x;
    let scroll = pos.left - dx;
    currentSlide = parseInt(carousel.scrollLeft / scrollValue);
    console.log(parseInt(carousel.scrollLeft / scrollValue));
    carousel.scrollLeft = scroll;
  };
  let mouseUpHandler = (e) => {
    carousel.style.cursor = "grab";
    carousel.style.removeProperty("user-select");
    move = false;
  };

  carousel.addEventListener("mousedown", mouseDownHandler);

  let prev = document.querySelector(
    ".main-carousel .main-carousel__arrow--prev"
  );
  let next = document.querySelector(
    ".main-carousel .main-carousel__arrow--next"
  );
  prev.addEventListener("click", scrollCarousel);
  next.addEventListener("click", scrollCarousel);

  function scrollCarousel(event) {
    carousel.style.scrollBehavior = "smooth";
    let button = event.path.find((el) => el.nodeName.toLowerCase() == "button");
    let direction = button.classList.contains("main-carousel__arrow--prev")
      ? -1
      : 1;

    let newPosition = currentSlide + direction;
    if (newPosition < 0) newPosition = 0;
    if (
      newPosition >
      carouselItems.length - (window.innerWidth >= 992 ? 2 : 1)
    ) {
      carousel.style.scrollBehavior = "unset";
      return;
    }
    currentSlide = newPosition;

    carousel.scrollLeft = scrollValue * currentSlide;
  }
})();
