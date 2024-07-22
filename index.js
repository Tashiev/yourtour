const header = document.querySelector('.js-header');
const headerH = header.clientHeight;
const headerNav = document.querySelectorAll('.nav__names');
const phone = document.querySelector('.header___phone_number');
const logoElement = document.querySelector('.header__logo');
const phoneElement = document.querySelector('.header___phone_block');
const liElements = document.querySelectorAll('.header__nav ul li');
const anchors = document.querySelectorAll('a[href*="#"]');
const searchButton = document.querySelector('.intro__button');
const detailButton = document.querySelectorAll('.detail__button');
const findButton = document.querySelector('.find__button');
const resetButton = document.querySelector('.reset__button');

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        headerNav.forEach(nav => nav.classList.add('fixed2'));
        phone.classList.add('fixedPhoneColor');
        phoneElement.style.color = 'black';
        logoElement.style.backgroundImage = "url('./images/YourTourBlack.png')";
        liElements.forEach(li => {
            li.classList.add('black');
        });
    } else {
        header.classList.remove('fixed');
        headerNav.forEach(nav => nav.classList.remove('fixed2'));
        phone.classList.remove('fixedPhoneColor');
        logoElement.style.backgroundImage = "url('./images/YourTour.png')";
        phoneElement.style.color = 'white';
        liElements.forEach(li => {
            li.classList.remove('black');
        });
    }
};


for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        const element = document.querySelector(blockID);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerH - 50;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.main__nav a');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('main__nav_tour_active'));
            this.classList.add('main__nav_tour_active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageBlocks = document.querySelectorAll('.image__block');
    const storyBlocks = document.querySelectorAll('.story__block');

    imageBlocks.forEach(block => {
        const button = block.querySelector('.detail__button');
        
        block.addEventListener('click', function () {
            button.classList.toggle('active');
        });
    });

    storyBlocks.forEach(block => {
        const button = block.querySelector('.detail__button');
        
        block.addEventListener('click', function () {
            button.classList.toggle('active');
        });
    });
});



searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    searchButton.style.backgroundColor = '#F8E6BE';
})

findButton.addEventListener('click', function(e) {
    e.preventDefault();
    findButton.style.backgroundColor = '#627F7E';
})

resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    resetButton.style.backgroundColor = '#D9DFDB';
})

document.addEventListener('DOMContentLoaded', function(e) {
    const linkSocial = document.querySelectorAll('.link__social');
    linkSocial.forEach(link  => {
        link.addEventListener('click', function(event) {
            this.style.color = '#EFA501';
            this.style.textDecoration = 'underline';
        })
    })
})

document.addEventListener('DOMContentLoaded', function(e) {
    const detailButton = document.querySelectorAll('.detail__button');
    detailButton.forEach(button => {
        button.addEventListener('click', function(event) {
            this.classList.add('active');
        });
        button.addEventListener('mouseleave', function(event) {
            this.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function(e) {
    const linkText = document.querySelectorAll('.link__text');
    linkText.forEach(link  => {
        link.addEventListener('click', function(event) {
            this.style.color = '#286562';
            this.style.textDecoration = 'underline';
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('city-select');

    function changeColor() {
        if (select.value === "") {
            select.style.color = "#A6A6A6";
        } else {
            select.style.color = "black";
        }
    }

    select.addEventListener('change', changeColor);
    changeColor();
});;

document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const finishDateInput = document.getElementById('finishDate');

    function updatePlaceholderColor(input) {
        if (!input.value) {
            input.classList.add('date-placeholder');
        } else {
            input.classList.remove('date-placeholder');
        }
    }

    startDateInput.addEventListener('input', function() {
        updatePlaceholderColor(startDateInput);
    });

    finishDateInput.addEventListener('input', function() {
        updatePlaceholderColor(finishDateInput);
    });

    updatePlaceholderColor(startDateInput);
    updatePlaceholderColor(finishDateInput);
});
