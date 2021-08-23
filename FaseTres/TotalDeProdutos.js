/*
Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.
*/
const prompt = require("prompt-sync")();
//Entrada
var qtdeProdutos = prompt("Digite a qtde de produtos que serão adquiridos:");
//Saída
console.log(`Parabéns por comprar ${qtdeProdutos} produtos!`);