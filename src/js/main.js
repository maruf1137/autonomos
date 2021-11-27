$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 80,
  nav: true,
  center: true,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3,
    },
    400: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 7,
    },
  },
});

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  const mblNab = document.querySelector(".mbl-nav");
  mblNab.classList.add("active-nav");
});
closeBtn.addEventListener("click", () => {
  const mblNab = document.querySelector(".mbl-nav");
  mblNab.classList.remove("active-nav");
});
