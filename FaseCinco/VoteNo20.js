/*
No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
*/

var prompt = require('prompt-sync')();
//Entradas
console.log("===Eleições 2020===")
var idade = prompt("Digite a sua idade: ");
//Processamento
//Primeiro particularizar, depois, generalizar.
teste = idade >= 16 == true
console.log("Você está apto a votar:", teste);


/*
if (idade >= 16) {
    console.log("Você está apto a votar!"); //Saída
} else {
    console.log("Você não está apto a votar!"); //Saída
}
*/
