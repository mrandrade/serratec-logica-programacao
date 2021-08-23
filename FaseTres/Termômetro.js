/*
O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
*/
const prompt = require("prompt-sync")();
//Entrada
var temperatura = prompt("Digite a temperatura em Celsius p/ converter para Fahrenheit:");
//Processamento
var resultFahrenheit = temperatura * 1.8 + 32;
//Saída
console.log(resultFahrenheit);