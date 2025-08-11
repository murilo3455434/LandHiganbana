const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const href = window.location.href;
const nome = document.getElementsByClassName("nome-personagem")[0];
const Historia = document.getElementsByClassName("texto-personagem")[0];

function IndexPer() {
  const params = new URLSearchParams(window.location.search);
  const personagemID = href.charAt(href.length - 1);

  if (!personagemID) return;

  const nomeEl = document.getElementsByClassName("nome-personagem")[0];
  const historiaEl = document.getElementsByClassName("texto-personagem")[0];
  const imageEl = document.getElementById("Imageper");

  if (!nomeEl || !historiaEl || !imageEl) return;

  switch (personagemID) {
    case "1":
      nomeEl.innerText = "Thiago José Fritz";
      historiaEl.innerText = "Thiago é o que podemo chamar de CLT médio. nasceu em uma capital. desde criança sempre gostou de entender e desvendar todo tipo de mistério. Essa curiosidade provavelmente foi fruto de conviver com seu pai, que por anos durante a infância de Thiago, foi cientista forense. Entender provas e dados se tornou a paixáo do jovem Fritz. Sua carisma e otimismo vieram de sua mae, uma ótima psiquiatra que sempre o fez enxergar que o copo que está vazio ao menos não vai transbordar. Seus esforços e dedicação formaram seu currículo com dois anos de estágio em um jornal local e formaçdo em jornalismo em uma faculdade bem reconhecida.";
      imageEl.src = "./images/sketch 1-Thiago.png";
      break;

    case "2":
      nomeEl.innerText = "Jhonatan Pinto Da Silva";
      historiaEl.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      imageEl.src = "./images/sketch 1-Thiago.png";
      break;

    case "3":
      nomeEl.innerText = "Personagem 2";
      historiaEl.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      imageEl.src = "./images/sketch 1-Thiago.png";
      break;

    case "4":
      nomeEl.innerText = "Personagem 3";
      historiaEl.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      imageEl.src = "./images/sketch 1-Thiago.png";
      break;

    case "5":
      nomeEl.innerText = "Personagem 4";
      historiaEl.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      imageEl.src = "./images/sketch 1-Thiago.png";
      break;
  }
}


function Personagem(n){
  window.location.href = href+"/personagem.hmtl?"+n;
}

function Voltar(){
  window.location.href = href+"/index";
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
