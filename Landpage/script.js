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


function textMudar() {
  texto = document.getElementById('texto-introduçao');
  titulo = document.getElementById('titulo2');

  if (currentSlide == 0) {
    texto.innerHTML = "Higanbana é um jogo de investigação e suspense, ambientado em um vilarejo distante da cidade nos anos 2000. O jogo conta a história de um jornalista investigativo que busca uma história que decidirá o futuro de sua carreira. O jogo tem um objetivo não apenas de entreter o jogador, mas também apresentar uma moral final e críticas, como por exemplo sobre a insalubridade de algumas cidades e vilarejos no Brasil, muitas vezes causada pela falta de atenção dos governos. Além disso, em muitas empresas vemos trabalhadores cumprindo papéis que não tem a competência necessária, isso provoca desconforto e dependendo do serviço, risco a vida do trabalhador."
    titulo.innerHTML = 'História'
  } else if (currentSlide == 1) {
    texto.innerHTML = "Higanbana é um jogo de investigação e suspense, ambientado em um vilarejo distante da cidade nos anos 2000. O jogo conta a história de um jornalista investigativo que busca uma história que decidirá o futuro de sua carreira. O jogo tem um objetivo não apenas de entreter o jogador, mas também apresentar uma moral final e críticas, como por exemplo sobre a insalubridade de algumas cidades e vilarejos no Brasil, muitas vezes causada pela falta de atenção dos governos. Além disso, em muitas empresas vemos trabalhadores cumprindo papéis que não tem a competência necessária, isso provoca desconforto e dependendo do serviço, risco a vida do trabalhador."
    titulo.innerHTML = 'História'
  }
  else if (currentSlide == 2) {
    console.log('Segundo slide');
    texto.innerHTML = "A flor de Higanbana chegou ao Brasil nos anos de 1960 com o político japonês Kanji Aketozaki, que apoiou seu amigo Manuel Severino em seu grande sonho de erguer um pequeno vilarejo. A planta se espalhou com o passar dos tempos, e atraves de uma conversa entre Manuel e Kanji, Manuel deu o nome Higanbana ao vilarejo. Em 1977 o seu sonho se tornou real, e a partir desta data o vilarejo Higanbana foi oficialmente reconhecido pelo IBGE."
    titulo.innerHTML = 'Historia da Flor'
  }

  console.log(currentSlide);
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  textMudar();
  showSlider();

}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  textMudar();
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
  document.getElementById("background-video").playbackRate = 0.3; 
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