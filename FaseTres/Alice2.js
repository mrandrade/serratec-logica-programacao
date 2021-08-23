/*
É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?
*/

//Entrada
var jogos = 345.00;
var videogame = 1545.00;
var numCupons;
//Processamento
numCupons = Math.round((jogos + videogame) / 190.00);
//Saída
console.log(`Alice ganhou ${numCupons} cupons.`);