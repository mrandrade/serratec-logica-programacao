/*
Requisito:
Criar um programa para saber se o carro está ligado ou desligado.
*/

//var prompt = require("prompt-sync")();

//Entrada
console.log('Responda algumas perguntas com "sim" ou "não": '); // Utilizou-se aspas simples para usar aspas duplas dentro de strings.
var barulho = "sim";//prompt("Está ouvindo barulho de motor? ");
var movimento = "sim";//prompt("O veículo está em movimento? ");
var luzes = "sim";//prompt("As luzes do painel, ou farol, estão acesas? ");

//Processamento
//Curto circuito
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim"); //|| e && tem a mesma ordem de precedência.
//    ""     = false || (true && true);
//    ""     = false || true;
//    ""     = true;
//Saída
console.log("Seu carro está ligado?", ligado);