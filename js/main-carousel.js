new Glider(document.querySelector('.main-carousel__wrapper'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.main-carousel__arrow--prev',
        next: '.main-carousel__arrow--next'
    },
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2.5,
                duration: 0.25
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1.5,
                duration: 0.25
            }
        },
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 2.5,
                duration: 0.25
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.5,
                duration: 0.25
            }
        },
    ]
});
function showProject(e) {
    let item = e.target.closest(".main-carousel__item");
    let photo = item.querySelector(".main-carousel__item-photo");
    let project = item.querySelector(".main-carousel__item-project");
    photo.style.display = "none";
    project.style.display = "block";

}
function showProjectInit() {
    document.querySelectorAll(".main-carousel__item-show-project").forEach(button => button.addEventListener("click", showProject));
}
window.addEventListener("load", showProjectInit()); 