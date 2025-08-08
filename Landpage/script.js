const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const href = window.location.href;

function IndexPer() {

  if (href === "http://127.0.0.1:5500/Landpage/Personagem.html?1") {
    const nome = document.getElementsByClassName("nome-personagem")[0];
    if (nome) {
      nome.innerText = "Thiago José Fritz";
    }
  }
  if (href === "http://127.0.0.1:5500/Landpage/Personagem.html?2") {
    const nome = document.getElementsByClassName("nome-personagem")[0];
    if (nome) {
      nome.innerText = "Jhonatan Pinto Da Silva";
    }
  }
  if (href === "http://127.0.0.1:5500/Landpage/Personagem.html?3") {
    const nome = document.getElementsByClassName("nome-personagem")[0];
    if (nome) {
      nome.innerText = "Personagem 2";
    }
  }
  if (href === "http://127.0.0.1:5500/Landpage/Personagem.html?4") {
    const nome = document.getElementsByClassName("nome-personagem")[0];
    if (nome) {
      nome.innerText = "Personagem 3";
    }
  }
  if (href === "http://127.0.0.1:5500/Landpage/Personagem.html?5") {
    const nome = document.getElementsByClassName("nome-personagem")[0];
    if (nome) {
      nome.innerText = "Personagem 4";
    }
  }
 
}

function Personagem(n){
  window.location.href = "http://127.0.0.1:5500/Landpage/Personagem.html?"+n;
}

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
