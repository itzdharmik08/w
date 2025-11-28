
let slideIndex = -1;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    slides[slideIndex].classList.add('active');
    
    setTimeout(showSlides, 5000);
}

showSlides();