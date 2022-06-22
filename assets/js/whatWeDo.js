//#region Sticky NavBar
const header = document.querySelector(".header");
const logo1 = document.querySelector("#logo-1");
const logo2 = document.querySelector("#logo-2");
let sticky = header.offsetTop;
logo2.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.pageYOffset - 140 > sticky) {
    header.classList.add("onscroll");
    logo2.style.display = "block";
    logo1.style.display = "none";
  } else {
    header.classList.remove("onscroll");
    logo2.style.display = "none";
    logo1.style.display = "block";
  }
});
//#endregion
