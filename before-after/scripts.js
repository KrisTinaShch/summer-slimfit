


$('.before-after__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".before-after-container");

    sliders.forEach(container => {
        const slider = container.querySelector(".slider");
        const afterImage = container.querySelector(".after-image");
        const handle = container.querySelector(".slider-handle");
        const slickContainer = container.closest(".before-after__container");

        let isDragging = false;

        handle.addEventListener("pointerdown", function (event) {
            isDragging = true;
            document.body.style.userSelect = "none";
            event.preventDefault();

            if (slickContainer) {
                $(slickContainer).slick("slickSetOption", "swipe", false, false);
            }
        });

        document.addEventListener("pointermove", function (event) {
            if (isDragging) {
                let rect = container.getBoundingClientRect();
                let percentage = ((event.clientX - rect.left) / rect.width) * 100;
                percentage = Math.max(0, Math.min(100, percentage));

                slider.value = percentage;
                afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
                let containerWidth = container.offsetWidth;
                let newPosition = (containerWidth * percentage) / 100;
                handle.style.left = `${newPosition}px`;
            }
        });

        document.addEventListener("pointerup", function () {
            isDragging = false;
            document.body.style.userSelect = "";

            if (slickContainer) {
                $(slickContainer).slick("slickSetOption", "swipe", true, false);
            }
        });

        handle.addEventListener("touchmove", function (event) {
            event.stopPropagation();
        });

        handle.addEventListener("mousedown", function (event) {
            event.stopPropagation();
        });
    });
});

