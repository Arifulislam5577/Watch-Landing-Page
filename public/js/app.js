import * as icons from "phosphor-icons";
const listBtn = document.querySelector(".list-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

const closeNav = function () {
  menu.classList.remove("nav-open");
  listBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
};

listBtn.addEventListener("click", () => {
  listBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  menu.classList.toggle("nav-open");
});

closeBtn.addEventListener("click", () => {
  listBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  menu.classList.toggle("nav-open");
});
window.addEventListener("scroll", closeNav);
