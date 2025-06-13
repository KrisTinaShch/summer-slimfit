// USPS SLIDES 

var action = "click";
var speed = "500";

$(document).ready(function () {
    $('li.usp:first-of-type').next()
        .slideToggle(speed)
    // Question handler
    $('li.usp').on(action, function () {
        // Get next element
        $(this).next()

            .slideToggle(speed)
            // Select all other answers
            .siblings('li.a')
            .slideUp();
    });
});

// INGREDIENTS

$(document).on('click', '.ingredient', function (event) {
    var $name = $(this);
    var $details = $name.next();
    $($details).toggleClass('is-visible');
});

$(document).click(function (e) {
    if (($(e.target).is('.ingr-popup')) || $(e.target).is('.close')) {
        $(".ingr-popup").removeClass('is-visible');
    }
});

// Animated numbers
const counters = document.querySelectorAll('.slim-program .stat strong');
let counted = false;

function animateCount(el, end, suffix = '') {
    let start = 0;
    const isDecimal = end % 1 !== 0;
    const duration = 1000;
    const step = isDecimal ? 0.1 : 1;
    const fps = 60;
    const increment = (end - start) / (duration / (1000 / fps));

    const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
            clearInterval(counter);
            el.textContent = isDecimal ? end.toFixed(1) + suffix : Math.floor(end) + suffix;
        } else {
            el.textContent = isDecimal ? start.toFixed(1) + suffix : Math.floor(start) + suffix;
        }
    }, 1000 / fps);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            counted = true;
            counters.forEach(counter => {
                const value = parseFloat(counter.getAttribute('data-count'));
                const text = counter.textContent.trim();
                const suffix = text.replace(/[0-9.\s]/g, ''); // %, +, /5, etc.
                animateCount(counter, value, suffix);
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.slim-program'));