/*
20.	Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.
*/
const prompt = require("prompt-sync")();
//Entrada
var num = prompt("Digite um número inteiro: ");
var result;
//Processamento
result = num * 2;
//Saída
console.log(`O dobro de ${num} foi ${result}`);