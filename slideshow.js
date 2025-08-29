let slideIndex = 0;
let slides;
let slideTimer;
let music = document.getElementById("bgMusic");

function openModal() {
  document.getElementById("slideshowModal").style.display = "block";
  slides = document.querySelectorAll(".slideshow img");
  slideIndex = 0;
  showSlides();


  music.currentTime = 0;
  music.play();
}

function closeModal() {
  document.getElementById("slideshowModal").style.display = "none";
  clearTimeout(slideTimer); 

  music.pause();
}

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");

  slideTimer = setTimeout(showSlides, 3000); 
}
