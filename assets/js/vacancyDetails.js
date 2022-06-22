//#region Red Warning
const inputs = document.querySelectorAll("input");
const fileBorder = document.querySelector(
  ".vacancy-form__wrapper__form__content__right__file-wrapper__label"
);
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  inputs.forEach((input) => {
    switch (input.getAttribute("name")) {
      case "name":
        if (input.value === "") {
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        break;
      case "surname":
        if (input.value === "") {
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        break;
      case "email":
        if (input.value === "") {
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        break;
      case "company":
        if (input.value === "") {
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        break;
      case "tel":
        if (input.value === "") {
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        break;
      case "file":
        if (input.value === "") {
          fileBorder.style.borderColor = "red";
          fileBorder.style.borderStyle = "solid";
        } else {
          fileBorder.style.borderColor = "rgba(255, 255, 255, 0.5)";
          fileBorder.style.borderStyle = "dashed";
        }
        break;
      default:
        break;
    }
  });

  e.preventDefault();
});
//#endregion

//#region File Upload
const input = document.getElementById("file");
const text = document.querySelector(
  ".vacancy-form__wrapper__form__content__right__file-wrapper__label__description"
);

input.addEventListener("change", (e) => {
  text.textContent = input.files[0].name;
});
//#endregion
