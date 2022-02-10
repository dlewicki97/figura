(function () {
  document
    .querySelector(".layout-nav__hamburger-menu")
    .addEventListener("click", () => {
      document.querySelector(".layout-nav__collapse").classList.toggle("active");
    });
})();

