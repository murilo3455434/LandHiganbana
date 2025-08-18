const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const href = window.location.href;
const nome = document.getElementsByClassName("nome-personagem")[0];
const Historia = document.getElementsByClassName("texto-personagem")[0];




let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

const personagens = document.querySelectorAll('.div-personagem');
const btnNextPer = document.getElementById('nextPersonagem');
const btnPrevPer = document.getElementById('prevPersonagem');

let index = 0;

function mostrarPersonagem() {
  personagens.forEach((div, i) => {
    div.classList.remove('active');
    if (i === index) {
      div.classList.add('active');
    }
  });
}

mostrarPersonagem();

btnNextPer.addEventListener('click', () => {
  index = (index + 1) % personagens.length;
  mostrarPersonagem();
});

btnPrevPer.addEventListener('click', () => {
  index = (index - 1 + personagens.length) % personagens.length;
  mostrarPersonagem();
});

function maisLento() {
  document.getElementById("background-video").playbackRate = 0.5; 
}

const slider22 = document.getElementsByClassName("carousel-container");

let isDown = false;
let startX;
let scrollLeft;

slider2.addEventListener("mousedown", (e) => {
  isDown = true;
  slider2.classList.add("active");
  startX = e.pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
  slider2.style.cursor = "grabbing";
});

slider2.addEventListener("mouseleave", () => {
  isDown = false;
  slider2.style.cursor = "grab";
});

slider2.addEventListener("mouseup", () => {
  isDown = false;
  slider2.style.cursor = "grab";
});

slider2.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk = (x - startX) * 2; // velocidade do arrasto
  slider2.scrollLeft = scrollLeft - walk;
});