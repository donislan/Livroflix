document.getElementById("showAbout").addEventListener("click", function () {
  var textBox = document.getElementById("textBox");
  var login = document.querySelector(".login");

  if (textBox.style.display === "none" || textBox.style.display === "") {
    textBox.style.display = "block";
    this.innerText = "Login";
  } else {
    textBox.style.display = "none";
    login.style.display = "block";
    this.innerText = "Sobre";
  }

  var sectionAbout = document.querySelector(".sectionAbout");
  sectionAbout.classList.toggle("visible");
});

document
  .getElementById("iniciarSessaoButton")
  .addEventListener("click", function () {
    var loginRegisterBox = document.getElementById("loginRegisterBox");
    var main = document.getElementsByClassName("main")[0];

    if (
      loginRegisterBox.style.display === "none" ||
      loginRegisterBox.style.display === ""
    ) {
      loginRegisterBox.style.display = "block";
      main.style.backgroundImage = "url('/imagens/BannerPrincipal.jpg')";
      main.style.backgroundSize = "190vh";
    }
  });

document
  .getElementById("iniciarSessaoButton")
  .addEventListener("click", function () {
    var telaInicial = document.getElementById("telaInicial");
    var loginRegisterBox = document.getElementById("paginaDeLogin");

    telaInicial.style.opacity = 0; // Torna a tela inicial transparente
    telaInicial.style.pointerEvents = "none"; // Desativa os eventos da tela inicial
    loginRegisterBox.style.top = "0"; // Exibe a seção de login
  });

const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");

loginLink.addEventListener("click", () => {
  login.style.transform = "rotateY(0deg)";
  register.style.transform = "rotateY(90deg)";
});

registerLink.addEventListener("click", () => {
  login.style.transform = "rotateY(-90deg)";
  register.style.transform = "rotateY(0deg)";
});

document
  .getElementById("botaoFaleConosco")
  .addEventListener("click", function () {
    document
      .getElementById("faleCosnosco")
      .scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("tablePlan").addEventListener("click", function () {
  document.getElementById("plans").scrollIntoView({ behavior: "smooth" });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

const passos = document.querySelectorAll(".passo");
const formulario = document.getElementById("formulario");
const anteriorBotao = document.getElementById("anterior");
const proximoBotao = document.getElementById("proximo");
let passoAtual = 0;

function mostrarPasso(passo) {
  passos[passoAtual].classList.remove("ativo");
  passos[passo].classList.add("ativo");
  passoAtual = passo;
}

function atualizarBotoes() {
  anteriorBotao.disabled = passoAtual === 0;
  proximoBotao.disabled = passoAtual === passos.length - 1;
}

anteriorBotao.addEventListener("click", () => {
  mostrarPasso(passoAtual - 1);
  atualizarBotoes();
});

proximoBotao.addEventListener("click", () => {
  mostrarPasso(passoAtual + 1);
  atualizarBotoes();
});

mostrarPasso(passoAtual);
atualizarBotoes();
