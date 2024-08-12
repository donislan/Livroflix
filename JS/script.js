document.getElementById("show-about").addEventListener("click", function () {
  var textBox = document.getElementById("text-box");
  var login = document.querySelector(".login");

  if (textBox.style.display === "none" || textBox.style.display === "") {
    textBox.style.display = "block";
    this.innerText = "Login";
  } else {
    textBox.style.display = "none";
    login.style.display = "block";
    this.innerText = "Sobre";
  }

  var sectionAbout = document.querySelector(".section-about");
  sectionAbout.classList.toggle("visible");
});

document
  .getElementById("btn-start-session")
  .addEventListener("click", function () {
    var loginRegisterBox = document.getElementById("login-register-box");
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
  .getElementById("btn-start-session")
  .addEventListener("click", function () {
    var telaInicial = document.getElementById("first-display");
    var loginRegisterBox = document.getElementById("login-display");

    telaInicial.style.opacity = 0;
    telaInicial.style.pointerEvents = "none"; //
    loginRegisterBox.style.top = "0";
  });

const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");

loginLink.addEventListener("click", () => {
  login.style.transform = "rotateY(0deg)";
  register.style.transform = "rotateY(90deg)";
});

registerLink.addEventListener("click", () => {
  login.style.transform = "rotateY(-90deg)";
  register.style.transform = "rotateY(0deg)";
});

document
  .getElementById("btn-talk-to-us")
  .addEventListener("click", function () {
    document
      .getElementById("talk-to-us")
      .scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("table-plan").addEventListener("click", function () {
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
