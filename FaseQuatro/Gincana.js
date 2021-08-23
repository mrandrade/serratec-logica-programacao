/*
Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
*/

const prompt = require("prompt-sync")();
//Entrada
var equipeA = prompt("Equipe A - Digite a qtde de pacotes arrecadados: ");
var equipeAFeijao = prompt("Equipe A - Digite a qtde de pacotes de feijão arrecadados: ");
var equipeB = prompt("Equipe B - Digite a qtde de pacotes arrecadados: ");
var equipeBFeijao = prompt("Equipe B - Digite a qtde de pacotes de feijão arrecadados: ");

//Processamento
var dobraPontos1 = equipeAFeijao * 2;
var dobraPontos2 = equipeBFeijao * 2;
var somaPacotesA = equipeA + dobraPontos1;
var somaPacotesB = equipeB + dobraPontos2;
var ganhaEquipeA = somaPacotesA > somaPacotesB;
var ganhaEquipeB = somaPacotesB > somaPacotesA;

//Saída
console.log(`Equipe A: Pacotes ${equipeA}`);
console.log(`Equipe A: Feijão ${equipeAFeijao}`);
console.log(`Equipe B: Pacotes ${equipeB}`);
console.log(`Equipe B: Feijão ${equipeAFeijao}`);
console.log("[Apuração]");
console.log(`Equipe A: ${somaPacotesA}`);
console.log(`Equipe B: ${somaPacotesB}`);
if (ganhaEquipeA) {
    console.log(`E a vencedora é: Equipe A!`)
} else if (ganhaEquipeB) {
    console.log(`E a vencedora é: Equipe B!`)
}

