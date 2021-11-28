$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 80,
  nav: true,
  center: true,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

window.addEventListener("scroll", ()=>{
  const nav = document.querySelector(".nav")
  nav.classList.toggle("sticky", window.scrollY > 10)
})

const openBtn = document.querySelector(".bar");
const closeBtn = document.querySelector(".close-btn");

const openNav = ()=>{
  const mblNab = document.querySelector(".mbl-nav");
  mblNab.classList.add("active-nav");
}

const closeNav = ()=>{
  const mblNab = document.querySelector(".mbl-nav");
  mblNab.classList.remove("active-nav");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);


