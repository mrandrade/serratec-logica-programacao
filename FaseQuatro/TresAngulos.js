/*
O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
*/
const prompt = require("prompt-sync")();
//Entrada
var angulo1 = prompt("Ângulo 1 - Digite o primeiro ângulo: ");
var angulo2 = prompt("Ângulo 2 - Digite o segundo ângulo: ");
var angulo3 = prompt("Ângulo 3 - Digite o terceiro ângulo: ");
//Processamento
var equilatero = parseInt(angulo1) + parseInt(angulo2) + parseInt(angulo3);

//Saída
if (equilatero == 180) {
    console.log("Triângulo Equilátero Válido"); //Saída
}