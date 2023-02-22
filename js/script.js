const header = document.querySelector('.header');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');   
        header.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}


new Swiper('.first__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    touchRation: 1.5,
    keyboard:{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    simulateTouch: false,
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
  });