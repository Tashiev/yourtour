const fixedHeder = document.querySelector(".header");
const header = document.querySelector(".js-header");
const headerH = 450;
const headerNav = document.querySelectorAll(".nav__names");
const phone = document.querySelector(".header___phone_number");
const logoElement = document.querySelector(".header__logo a");
const phoneElement = document.querySelector(".header___phone_block");
const liElements = document.querySelectorAll(".header__nav ul li");
const anchors = document.querySelectorAll('a[href*="#"]');

const header__block = document.querySelector(".header__block");

const email = document.getElementById("email");

const phoneInput = document.querySelector(".phone");
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
    fixedHeder.style.marginTop = "0";
    header.classList.add("fixed");
    headerNav.forEach((nav) => nav.classList.add("fixed2"));
    phone.classList.add("fixedPhoneColor");
    phoneElement.style.color = "black";
    logoElement.style.color = "black";
    header__block.style.marginTop = "0";
    liElements.forEach((li) => {
      li.classList.add("black");
    });
  } else {
    header.classList.remove("fixed");
    headerNav.forEach((nav) => nav.classList.remove("fixed2"));
    phone.classList.remove("fixedPhoneColor");
    logoElement.style.color = "white";
    phoneElement.style.color = "white";
    header__block.style.marginTop = "21px";
    liElements.forEach((li) => {
      li.classList.remove("black");
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
