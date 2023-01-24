let comida = "pizza";
let bebida = "refrigerante";

if (comida == "pizza" && bebida == "refrigerante") {
  console.log(`A refeição será ${comida} e ${bebida}`);
} else {
  console.log("A refeição não será pizza e refrigerante");
}

const cardapio = ["pizza", "torta", "hamburguer", "refrigerante", "cerveja"];

console.log("Cardapio:");
for (let i = 0; i < cardapio.length; i++) {
  console.log(cardapio[i]);
}
