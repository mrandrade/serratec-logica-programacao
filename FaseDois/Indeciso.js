/*
O programa “indeciso” não sabe bem o número que quer imprimir. Por isso, antes de cada dúvida, os números devem ser separados do texto e atribuídos a uma variável inteira.
*/

//Entrada, processamento, saída
var num1 = (Math.trunc(Math.random() * 10));
var num2 = (Math.trunc(Math.random() * 10));
var num3 = (Math.trunc(Math.random() * 10));
var num4 = (Math.trunc(Math.random() * 10));
//Para escrever em várias linhas no VSCode use Ctrl-Alt-Setas

console.log("Quero " + num1 + "."); //Saída
console.log("Não " + num2 +". Ah esse era o da mamãe. O meu é " + num3+"."); //Saída
console.log("Já decidi: é " + num4 + "! Bingo :)"); //Saída