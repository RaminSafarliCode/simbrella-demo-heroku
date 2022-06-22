const links = [
  ...document.querySelectorAll(
    ".header__container__nav__list__list-item__link"
  ),
];

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    e.target.classList.add("hover-color");
  });
  link.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("hover-color");
  });
});

// *****************
const whatWeDo = document.querySelector(".what-we-do-section");
const ourProducts = document.querySelector(".products");
const whoWeAre = document.querySelector(".enhance-section");
const jobs = document.querySelector(".work-with-us");
const news = document.querySelector(".news");
const contacts = document.querySelector(".footer");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset < whatWeDo.offsetTop) {
    links[0].classList.remove("show-me");
  }
  if (window.pageYOffset >= whatWeDo.offsetTop) {
    links[0].classList.add("show-me");
    links[1].classList.remove("show-me");
  }
  if (window.pageYOffset >= ourProducts.offsetTop) {
    links[0].classList.remove("show-me");
    links[1].classList.add("show-me");
    links[2].classList.remove("show-me");
  }
  if (window.pageYOffset >= whoWeAre.offsetTop) {
    links[1].classList.remove("show-me");
    links[2].classList.add("show-me");
    links[3].classList.remove("show-me");
  }
  if (window.pageYOffset >= jobs.offsetTop) {
    links[2].classList.remove("show-me");
    links[3].classList.add("show-me");
    links[4].classList.remove("show-me");
  }
  if (window.pageYOffset >= news.offsetTop) {
    links[3].classList.remove("show-me");
    links[4].classList.add("show-me");
    links[5].classList.remove("show-me");
  }
  if (window.pageYOffset + 100 >= contacts.offsetTop) {
    links[4].classList.remove("show-me");
    links[5].classList.add("show-me");
  }
});
