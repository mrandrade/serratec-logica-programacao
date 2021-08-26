/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): André Ponte
 * Título: Teste de COVID retorno a Escola.
 * Arquivo: 
 * Elaboração do Requisito: 22/08/2021


## Descrição: 
No teste de Covid, coloque um questionário com os 5 sintomas mais comuns da covid, retornando se o aluno fica em casa, procure um posto se saude ou liberado para ir a escola

## Dicas:
• Abuse das funções: prompt, if, e operadores lógicos.
*/

//const prompt = require("prompt-sync")();

console.log("------ Questionário para sintomas de Covid-19 -------")
console.log("------ Presença ou sinais de sintomas gripais: -------")

var pergunta1 = "N"; //prompt("Febre: S ou N ");
var pergunta2 = "N";//prompt("Tosse: S ou N ");
var pergunta3 = "N";//prompt("Falta de ar: S ou N ");
var pergunta4 = "N";//prompt("Perda de olfato ou paladar: S ou N ");
var pergunta5 = "N";//prompt("Coriza ou congestão nasal: S ou N");

var teste1 = pergunta1 == "S"
var teste2 = pergunta2 == "S"
var teste3 = pergunta3 == "S"
var teste4 = pergunta4 == "S"
var teste5 = pergunta5 == "S"


var alunoLiberado = teste1 && teste2 && teste3 && teste4 && teste5;

var alunoVaAtePosto = teste1 || teste2 || teste3 || teste4 || teste5;

if (alunoLiberado) {
    console.log("Você está com todos os sintomas. Por favor, dirija-se ao hospital mais próximo.")
}
else if (alunoVaAtePosto) {
    console.log("Você está com sintomas. Por favor, procure um posto de saúde.")
}
else {
    console.log("Você está liberado para frequentar a escola.")
}