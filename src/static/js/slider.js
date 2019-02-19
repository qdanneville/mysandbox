let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');

let slides = document.querySelectorAll('.slider-wrapper .slider-item');
let sliderLength = slides.length;
let activeSlide = 0;

slides[activeSlide].classList.add('active');

prevBtn.addEventListener('click', (e) => {
    slides[activeSlide].classList.remove('active');
    activeSlide--;

    if (activeSlide < 0 ) {
        activeSlide = sliderLength - 1;
    }

    slides[activeSlide].classList.add('active');
})

nextBtn.addEventListener('click', (e) => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;

    if (activeSlide >= sliderLength ) {
        activeSlide = 0;
    }

    slides[activeSlide].classList.add('active');
})
