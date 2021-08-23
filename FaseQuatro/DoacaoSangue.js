/*
Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
*/

const prompt = require("prompt-sync")();
//Entrada
console.log("==Banco de Sangue==");
console.log('[Digite "Sim" ou "Não" nas restrições a seguir]')
var idadeInf = prompt("Sua idade é inferior a 16 anos (S OU N): ");
var idadeSup = prompt("Sua idade é superior a 69 anos (S OU N): ");
var peso = prompt("Você está com peso inferior a 50kg (S OU N): ");
var gravidez = prompt("Você grávida (S OU N): ");
var hipertensao = prompt("Você está com sinais de hipertensão (S OU N): ");
var malaria = prompt("Você já teve malária (S OU N): ");
var doacaoRecente = prompt("Você doou sangue recentemente (S OU N): ");
//Processamento
var podeDoar = (idadeInf == "N" && idadeSup == "N" && peso == "N" && gravidez == "N" && hipertensao == "N" && malaria == "N" && doacaoRecente == "N");
//Saída
if (podeDoar) {
    console.log("Você está apto a doar sangue.");
} else {
    console.log("Infelizmente, você não está apto a doar sangue.");
}