/*
Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
*/
'use strict'
const prompt = require("prompt-sync")();
//Entrada
var resposta = prompt("Digite um número para calcular a tabuada: ")
var tabuada = parseInt(resposta);
//Processamento
console.log(`=== Tabuada de ${tabuada} ===`);
for (var numero = 1; numero <= 10; numero++){
    var calculo = tabuada * numero;
    console.log(`${tabuada} x ${numero} = ${calculo}`); //Saída
}