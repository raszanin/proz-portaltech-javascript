let elementoClicado = document.getElementById("elemento-clicado");

let botaoTempo = document.getElementById("botao-tempo");

let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click", function (evento) {
  tempo.innerText = Math.round(evento.timeStamp / 1000);
});

document.addEventListener("click", function (e) {
  elementoClicado.innerText = e.target.id;
});
