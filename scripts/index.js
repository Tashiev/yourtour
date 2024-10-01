const fixedHeder = document.querySelector(".header");
const header = document.querySelector(".js-header");
const headerH = 450;
const phone = document.querySelector(".header___phone_number");
const logoElement = document.querySelector(".header__logo img");
const phoneElement = document.querySelector(".header___phone");
const liElements = document.querySelectorAll(".nav__link");
const anchors = document.querySelectorAll('a[href*="#"]');

const email = document.getElementById("email");

const phoneInput = document.querySelector(".form__input-phone");
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

const emailForm = document.getElementById("form");

const email_check =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

emailForm.addEventListener("submit", (event) => {
  if (!email.value.match(email_check)) {
    event.preventDefault();
  }
});

const startDate = document.getElementById("startDate");
const finishDate = document.getElementById("finishDate");
const dateForm = document.getElementById("form");


function validateDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startInputDate = new Date(startDate.value);
  const finishInputDate = new Date(finishDate.value);

  if (startInputDate < today) {
    window.alert("Нельзя выбрать дату в прошлом.");
    return false;
  }

  if (finishDate.value) {
    if (finishInputDate < startInputDate) {
      window.alert("Дата окончания не может быть раньше даты начала.");
      return false;
    }
  }

  return true;
}

dateForm.addEventListener("submit", (event) => {
  if (!validateDate()) {
    event.preventDefault();
  }
});

dateForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerH) {
    header.classList.add("fixed");
    phone.classList.add("fixedPhoneColor");
    phoneElement.style.color = "black";
    logoElement.src = "./assets/logo-black.svg";
    liElements.forEach((li) => {
      li.classList.add("black");
      li.style.color = "black";
    });
  } else {
    header.classList.remove("fixed");
    phone.classList.remove("fixedPhoneColor");
    logoElement.src = "./assets/logo-white.svg";
    phoneElement.style.color = "white";
    liElements.forEach((li) => {
      li.classList.remove("black");
      li.style.color = "white";
    });
  }
};

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    const element = document.querySelector(blockID);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerH + 350;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("city-select");

  function changeColor() {
    if (select.value === "") {
      select.style.color = "#A6A6A6";
    } else {
      select.style.color = "black";
    }
  }

  select.addEventListener("change", changeColor);
  changeColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("startDate");
  const finishDateInput = document.getElementById("finishDate");

  function updatePlaceholderColor(input) {
    if (!input.value) {
      input.classList.add("form__input-date--placeholder");
    } else {
      input.classList.remove("form__input-date--placeholder");
    }
  }

  startDateInput.addEventListener("input", function () {
    updatePlaceholderColor(startDateInput);
  });

  finishDateInput.addEventListener("input", function () {
    updatePlaceholderColor(finishDateInput);
  });

  updatePlaceholderColor(startDateInput);
  updatePlaceholderColor(finishDateInput);
});
