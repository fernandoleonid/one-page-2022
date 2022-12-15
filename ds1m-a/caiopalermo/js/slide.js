let slideIndexImages = 0;
let slideIndexHasegawa = 0;

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

function showSlidesHasegawa() {
  let i;
  let slides = document.getElementsByClassName("mySlides-hasegawa");
  let dots = document.getElementsByClassName("dot-hasegawa");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexHasegawa++;
  if (slideIndexHasegawa > slides.length) {
    slideIndexHasegawa = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexHasegawa - 1].style.display = "block";
  dots[slideIndexHasegawa - 1].className += " active";
  setTimeout(showSlidesHasegawa, 2000);
}
