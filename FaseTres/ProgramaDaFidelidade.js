/*
O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
*/
const prompt = require("prompt-sync")();
//Entrada
var numCupons = prompt("Digite seus cupons: ");
var numPontos;
//Processamento
numPontos = numCupons;
//Saída
console.log(`De acordo com seus cupons, você tem ${numPontos} pontos no program de fidelidade.`);