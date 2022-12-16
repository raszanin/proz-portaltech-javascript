const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto:
      "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)",
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto:
      "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.",
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto:
      "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!",
  },
  {
    titulo: "Boteco do Jairo",
    subtitulo: "Aquela gelada todos os dias!",
    data: "16/12/2022",
    texto: "Cerveja gelada e ótimo ambiente. Sinuca e galera!",
  },
];

let id = 1;

arrayPostagens.map((post) => {
  const newArticle = document.createElement("article");

  newArticle.id = `post-${id}`;

  newArticle.innerHTML = `
        <h3>${post.titulo}</h3>
        <p class="subtitulo">${post.subtitulo}</p>
        <div class="data">${post.data}</div>
        <p>
          ${post.texto}
        </p>`;

  const main = document.querySelector("main");

  main.appendChild(newArticle);

  id = id + 1;
});
