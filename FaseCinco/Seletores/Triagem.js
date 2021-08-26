/*
A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
*/

const prompt = require("prompt-sync")();

var nome = prompt("Digite o nome do paciente: ");
var vacina = prompt("Já foi vacinado: S OU N ")
var vacinaUpCase = vacina.toUpperCase();
var regra = vacinaUpCase == "N";
if (regra) {
    console.log("----Triagem-----")
    console.log("Sujeito a infecção?", regra)
}
else {
    console.log("----Triagem-----")
    console.log("Sujeito a infecção?", regra)
}