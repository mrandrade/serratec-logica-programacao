/*
Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
*/
const prompt = require("prompt-sync")();
//Entrada
var inteiro1 = prompt("Digite um número inteiro: ");
var inteiro2 = prompt("Digite outro número inteiro: ");
var soma = 0;
var sub = 0;
var div = 0;
var mult = 0;
//Processamento
soma = parseInt(inteiro1) + parseInt(inteiro2);
sub = inteiro1 - inteiro2;
div = inteiro1 / inteiro2;
mult = inteiro1 * inteiro2;
//Saída
console.log(`O resultado da soma é ${soma}.`);
console.log(`O resultado da subtração é ${sub}.`);
console.log(`O resultado da divisão é ${div}`);
console.log(`O resultado da multiplicação é ${mult}.`);