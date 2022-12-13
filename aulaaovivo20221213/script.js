const postAutor = document.getElementsByClassName("post-autor");
console.log(postAutor[1].childNodes[1].innerText);

postAutor[1].childNodes[1].innerText = "Lucas Ricardo";
console.log(postAutor[1].childNodes[1].innerText);

postAutor[1].innerHTML = `
  <p><strong>Autor: </strong><span>José Aparecido</span> </p>
`;
console.log(postAutor[1].childNodes[1].innerText);
