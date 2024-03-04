const backToTop = document.getElementById("backToTop");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const mobileBtn = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const modalBtn = document.querySelector(".modalButton");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeButton");

window.onscroll = function () {
  scrollFunction();
};
const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
    header.classList.add("bg");
  } else {
    backToTop.style.display = "none";
    header.classList.remove("bg");
  }
};
const toggleMenu = () => {
  nav.classList.toggle("responsive");
};

const toggleModal = () => {
  overlay.classList.toggle("visible");
};

// two scrolltops for different browsers
backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // chrome, ff + others
  // header.style.backgroundColor = "pink";
});

mobileBtn.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
modalBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
