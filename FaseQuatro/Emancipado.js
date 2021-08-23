/*
É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
*/
const prompt = require("prompt-sync")();
//Entrada
var sexo = prompt('Sexo ("F" ou "M"): ');
var anoNasc = prompt("Digite o seu ano de nascimento: ");
var anoAtual = new Date().getFullYear();
var maiorIdade = sexo == "M";
var idade;
var regra;
//Processamento
idade = anoAtual - anoNasc;
regra = maiorIdade && (idade >= 18);
if (regra)
    console.log("Você é emancipado!"); //Saída
else
    console.log("Que pena... Você não é emancipado!"); //Saída