const fixedHeder = document.querySelector(".header");
const header = document.querySelector(".js-header");
const headerH = 450;
const phone = document.querySelector(".header___phone_number");
const logoElement = document.querySelector(".header__logo img");
const phoneElement = document.querySelector(".header___phone");
const liElements = document.querySelectorAll(".nav__link");
const anchors = document.querySelectorAll('a[href*="#"]');

const header__block = document.querySelector(".header__block");

const email = document.getElementById("email");

const phoneInput = document.querySelector(".form__input-phone");
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

const email_check =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

email.addEventListener("blur", () => {
  if (!email.value.match(email_check)) {
    window.alert(
      "Неправильный формат почты! Введите почту в указанном формате."
    );
  }
});

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerH) {
    header.classList.add("fixed");
    phone.classList.add("fixedPhoneColor");
    phoneElement.style.color = "black";
    logoElement.src = "./assets/logo-black.svg";
    header__block.style.marginTop = "0";
    liElements.forEach((li) => {
      li.classList.add("black");
      li.style.color = "black";
    });
  } else {
    header.classList.remove("fixed");
    phone.classList.remove("fixedPhoneColor");
    logoElement.src = "./assets/logo-white.svg";
    phoneElement.style.color = "white";
    header__block.style.marginTop = "28.8px";
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
