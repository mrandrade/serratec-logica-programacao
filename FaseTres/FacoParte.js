/*
O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão.
*/
const prompt = require("prompt-sync")();
//Entrada
var anoFundacao = 1891;
var anoNascimento = prompt("Digite seu ano de nascimento: ");
var anoAtual = new Date().getFullYear();
var idadeTere = "";
var anosAnterioresNasc = "";
var anosDepoisNasc = "";
//Processamento
idadeTere = anoAtual - anoFundacao;
anosAnterioresNasc = anoNascimento - anoFundacao;
anosDepoisNasc = anoAtual - anoNascimento;
//Saída
console.log(`Teresópolis tem ${idadeTere} anos. Desses, foram ${anosAnterioresNasc} antes de mim. Mas nos últimos ${anosDepoisNasc} anos ela conta comigo!`);