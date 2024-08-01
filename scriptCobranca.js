const passo1 = document.querySelector(".passo1");
const passo2 = document.querySelector(".passo2");
const passo3 = document.querySelector(".passo3");
const anteriorBotao = document.getElementById("anterior");
const proximoBotao = document.getElementById("proximo");
const concluirBotao = document.getElementById("concluir");

let passoAtual = 1;

function mostrarPasso(passo) {
  if (passo === 1) {
    passo1.style.display = "block";
    passo2.style.display = "none";
    passo3.style.display = "none";
    anteriorBotao.style.display = "none";
    proximoBotao.innerHTML = "Próximo";
    concluirBotao.style.display = "none";
  } else if (passo === 2) {
    passo1.style.display = "none";
    passo2.style.display = "block";
    passo3.style.display = "none";
    anteriorBotao.style.display = "block";
    proximoBotao.innerHTML = "Próximo";
    proximoBotao.style.display = "block";
    concluirBotao.style.display = "none";
  } else if (passo === 3) {
    passo1.style.display = "none";
    passo2.style.display = "none";
    passo3.style.display = "block";
    anteriorBotao.style.display = "block";
    proximoBotao.style.display = "none";
    concluirBotao.style.display = "block";
  }
}

anteriorBotao.addEventListener("click", () => {
  if (passoAtual > 1) {
    passoAtual--;
    mostrarPasso(passoAtual);
  }
});

proximoBotao.addEventListener("click", () => {
  if (passoAtual < 3) {
    passoAtual++;
    mostrarPasso(passoAtual);
  }
});

mostrarPasso(passoAtual);
