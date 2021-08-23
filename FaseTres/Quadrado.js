/*
Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.
O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.
*/
const prompt = require("prompt-sync")();
//Entrada
var num = prompt("Digite um número inteiro: ");
var result;
//Processamento
result = Math.pow(num);
//Saída
console.log(`O quadrado de ${num} é ${result}`);