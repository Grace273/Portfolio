let slideIndex = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

showSlides(slideIndex);

prevButton.addEventListener("click", function() {
    showSlides(-1);
})

nextButton.addEventListener("click", function() {
    showSlides(1);
})

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("projects");
    
    slideIndex += n

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}