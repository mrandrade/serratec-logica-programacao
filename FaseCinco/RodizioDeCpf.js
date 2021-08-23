/*
A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
*/
const prompt = require("prompt-sync")();
//Entrada
var digCpf = prompt('Digite o último dígito de seu CPF: ');
var dia = prompt('Digite o dia de hoje: ');
//Processamento
if ((digCpf % 2 == 0) && (dia % 2 == 0))
    console.log("Seu dígito é par e você só pode sair nos dias pares!"); //Saída
else if ((digCpf % 2 != 0) && (dia % 2 != 0))
    console.log("Seu dígito é ímpar e você só pode sair nos dias ímpares!"); //Saída