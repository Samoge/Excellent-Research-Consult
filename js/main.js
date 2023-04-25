var hamburger = document.querySelector(".hamburgermenu");
var showlinks = document.querySelector(".actionbuttons");
// var backdrop = document.querySelector('.backdrop')

function Addclass() {
  hamburger.classList.toggle("show");
  showlinks.classList.toggle("smoothmenushow");
}

ScrollReveal({
    reset: true,
    duration: 2000,
    distance: "40px",
  });
  
  ScrollReveal().reveal(".every", {
    delay: 300,
    origin: "bottom",
  });
  ScrollReveal().reveal(".everyfoot",{
    delay: 200,
    origin: "bottom",
  });
  ScrollReveal().reveal(".footer-ff",{
    delay: 1000,
    origin: "bottom",
  });