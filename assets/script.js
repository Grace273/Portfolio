let slideIndex = 1;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


prevButton.addEventListener("click", function() {
    showSlides(slideIndex -= 1);
})

nextButton.addEventListener("click", function() {
    showSlides(slideIndex += 1);
})

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("projects");
    
    slideIndex += n

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // -1 since array index starts at 0
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.width= "80%";
}