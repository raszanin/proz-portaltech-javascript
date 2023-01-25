let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0;
let distanciaDoTopo = 0;

document.addEventListener("keyup", (e) => {
  keyText.innerText = e.key;
  codeText.innerText = e.code;
});

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    distanciaDaEsquerda = distanciaDaEsquerda + 10;
    quadrado.style.left = distanciaDaEsquerda + "px";
  }
  if (e.code == "ArrowLeft") {
    distanciaDaEsquerda = distanciaDaEsquerda - 10;
    quadrado.style.left = distanciaDaEsquerda + "px";
  }
  if (e.code == "ArrowDown") {
    distanciaDoTopo = distanciaDoTopo + 10;
    quadrado.style.top = distanciaDoTopo + "px";
  }
  if (e.code == "ArrowUp") {
    distanciaDoTopo = distanciaDoTopo - 10;
    quadrado.style.top = distanciaDoTopo + "px";
  }
});
