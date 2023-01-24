const postAutor = document.getElementsByClassName("post-autor");
console.log(postAutor[1].childNodes[1].innerText);

postAutor[1].childNodes[1].innerText = "Lucas Ricardo";
console.log(postAutor[1].childNodes[1].innerText);

postAutor[1].innerHTML = `
  <p><strong>Autor: </strong><span>José Aparecido</span> </p>
`;
console.log(postAutor[1].childNodes[1].innerText);

console.log(postAutor[1]);

function imprimir(listaElementos) {
  for (let i = 0; i < listaElementos.lenght; i++) {
    console.log(listaElementos[1].childNodes[1]);
  }
}

imprimir(postAutor);

const user = {
  nome: "Roberto",
  telefone: "1898989898",
  comidas: ["maça", "pizza", "hamburguer"],
  idade: 40,
};

console.log(user.telefone);
