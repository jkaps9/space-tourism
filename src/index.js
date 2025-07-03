import "./styles.css";

const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
