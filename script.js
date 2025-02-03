// slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slide.length;
    let slideInterval = null;

    const firstSlideClone = slide[0].cloneNode(true);
    slides.appendChild(firstSlideClone);

    const indicators = document.querySelector('.indicators');
    const dots = document.querySelectorAll('.dot');

    function nextSlide() {
        currentIndex++;
        updateSlidePosition();

        if (currentIndex === totalSlides) {
            setTimeout(function() {
                slides.style.transition = 'none';
                currentIndex = 0;
                updateSlidePosition();
                setTimeout(function() {
                    slides.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
        updateIndicators();
    }

    function updateSlidePosition() {
        slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    function updateIndicators() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex % totalSlides) {
                dot.classList.add('active');
            }
        });
    }

    function currentSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        updateIndicators();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000); 
        });
    });

    slideInterval = setInterval(nextSlide, 5000); 
});

//sepet sayaç js kodu
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const numberDisplay = document.getElementById('number');

let number = 1;

decreaseButton.addEventListener('click', () => {
    if (number > 0) { 
        number--;
        numberDisplay.textContent = number;
    }
});

increaseButton.addEventListener('click', () => {
    number++;
    numberDisplay.textContent = number;
});


