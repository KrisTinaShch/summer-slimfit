var offers = new Swiper(".offers-slider", {
    slidesPerView: 1.2,
    initialSlide: 1,
    centeredSlides: true,
    pagination: {},
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            centeredSlides: false,


        },
    }
});


var gallery = new Swiper(".before-after-swiper", {
    slidesPerView: 1.2,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            centeredSlides: false,
        },
    }
});