/*
Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
*/

var prompt = require('prompt-sync')();
//Entradas
console.log("==Maioral==");
var A = prompt("Amigo 1 - Digite um número inteiro: ");
var B = prompt("Amigo 2 - Digite um número inteiro: ");
//Processamento
//Primeiro particularizar, depois, generalizar.

if (A > B) {
    console.log("Amigo 1 é o maioral"); //Saída
} else {
    console.log("Amigo 2 é o maioral"); //Saída
}