let slideIndexImages = 0;

function showSlidesImages() {
    let i;
    let slides = document.getElementsByClassName("mySlides-images");
    let dots = document.getElementsByClassName("dot-images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexImages++;
    if (slideIndexImages > slides.length) {
        slideIndexImages = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexImages - 1].style.display = "block";
    dots[slideIndexImages - 1].className += " active";
    setTimeout(showSlidesImages, 2000);
}