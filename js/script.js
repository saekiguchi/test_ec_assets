document.addEventListener("DOMContentLoaded", () => {
    const allowedStylesheets = [
        "https://comprime-dev01.com/test_ec_assets/css/common.css",
        "https://comprime-dev01.com/test_ec_assets/css/style.css"
    ];

    const links = document.querySelectorAll('link[rel="stylesheet"]');

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && !allowedStylesheets.includes(href)) {
            link.parentNode.removeChild(link);
        }
    });
});

const headerBtn = document.getElementById('header__btn');
const headerNav = document.getElementById('header__nav');

headerBtn.addEventListener('click', function() {
    if (headerBtn.classList.contains('is-active')) {
        headerBtn.classList.remove('is-active');
        headerNav.classList.remove('is-active');
    } else {
        headerBtn.classList.add('is-active');
        headerNav.classList.add('is-active');
    }
});

const headerMenuItems = document.querySelectorAll('header nav ul li a');
headerMenuItems.forEach(function(headerMenuItem) {
    headerMenuItem.addEventListener('click', function() {
        headerBtn.classList.remove('is-active');
        headerNav.classList.remove('is-active');
    });
});