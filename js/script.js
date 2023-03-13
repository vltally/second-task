const header = document.querySelector('.header-container');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');   
        header.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}


new Swiper('.first__swiper', {
    preloadImages: false,
    direction: 'horizontal',
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
    simulateTouch: true,
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
  });

  new Swiper('.second__swiper', {
    preloadImages: false,
    direction: 'horizontal',
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
    simulateTouch: true,
    slidesPerView: 'auto',
    watchOverflow: true,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
  });