const header = document.querySelector('.header');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');   
        header.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}

