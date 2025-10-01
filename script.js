// URLs reales
const images = [
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/curso1.jpeg",
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/curso2.jpeg",
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/curso3.jpeg",
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/curso4.jpeg",
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/curso5.jpeg"
];

const videos = [
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/vid1.mp4",
  "https://galerias-teczi.s3.us-east-2.amazonaws.com/vid2.mp4"
];

// Generar slider dinámicamente
const slider = document.getElementById("slider-gallery");
images.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Proyecto Teczi";
  slider.appendChild(img);
});

// Slider automático + botones
let index = 0;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(i) {
  index = (i + images.length) % images.length;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

// Autoplay cada 5 segundos
setInterval(() => {
  showSlide(index + 1);
}, 5000);

// Generar galería de videos
const videoGallery = document.getElementById("video-gallery");
videos.forEach(url => {
  const video = document.createElement("video");
  video.src = url;
  video.controls = true;
  videoGallery.appendChild(video);
});

// Inicializar
showSlide(0);
