window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

/*=========== SELEÇÃO DE PALAVRAS SOBRE ERP ===============*/

var palavras = [
  "Integração",
  "Automatização",
  "Otimização",
  "Segurança",
  "muito mais!",
];
var index = 0;
var palavraElement = document.getElementById("palavra");
var letraIndex = 0;
var intervalId;

function exibirLetra() {
  palavraElement.textContent += palavras[index].charAt(letraIndex);
  letraIndex++;

  if (letraIndex >= palavras[index].length) {
    clearInterval(intervalId);
    setTimeout(reiniciarLoop, 1000);
  }
}

function reiniciarLoop() {
  letraIndex = 0;
  palavraElement.textContent = "";
  index = (index + 1) % palavras.length;
  intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos
}

// Galera aqui se inicia o loop infinito
intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos

/*=========== DARK LIGHT MODE ===============*/

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*==================================================================*/

function toggleText(element) {
  var nextElement = element.nextElementSibling;
  if (nextElement && nextElement.tagName.toLowerCase() === "p") {
    nextElement.style.display =
      nextElement.style.display === "none" ? "block" : "none";
  }
}

/*==================================================================*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});