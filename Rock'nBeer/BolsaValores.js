/* 
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Nathan Guimarães
 * Título: BVV - Bolsa de Valores Virtual 📈
 * Arquivo: BVV.js
 * Elaboração do Requsito: 20/08/2021

## Descrição:
A BVV (Bolsa de Valores Virtual) é um sistema de negociação (compra e venda) de ações e controle de carteira do usuário.
Na entrevista com o cliente, ficou decidido que a primeira versão do sistema deverá conter as seguintes opções e funcionalidades:

• Informações do Usuário: 
    Nome do usuário;
    Carteira de ações do usuário (código, preço e quantidade de cada ação);
    
• Balcão de Negócios:
    Comprar ação;
    Vender ação;
    Lista das ações disponíveis para negociação (código, preço e quantidade de cada ação disponível para negociação);

## Orientações:
Os códigos de cada ação são representados por três letras maiúsculas seguidas de um número (VALE3, PETR4, ITUB4, ABEV3, MGLU3 etc.);
*/

const prompt = require("prompt-sync")();

var nomeUsuario;
var tickerAcao;
var precoAcao;
var qtdeAcao;
console.log("+++++++ Bem-Vindo ao Sistema Bolsa Valores ++++++++");
console.log("---------------------------------------------------");
const carteiraAcoes = [];
var index = 0;

console.log(`--------------- Cliente ${index + 1} -----------------`);
nomeUsuario = prompt("Digite o nome do cliente: ").toUpperCase();
console.log("---------------------------------------------------");
tickerAcao = prompt("Digite o ticker da ação: ").toUpperCase();
console.log("---------------------------------------------------");
precoAcao = prompt("Digite o preço por ação: ").toUpperCase();
console.log("---------------------------------------------------");
qtdeAcao = prompt("Digite o qtde de ações: ").toUpperCase();
console.log("---------------------------------------------------");
var modeloObjeto = `{nome: ${nomeUsuario}; ticker: ${tickerAcao}; preco: ${precoAcao}; qtde: ${qtdeAcao}};`; //JSON
carteiraAcoes.push(modeloObjeto);

for (var i = 0; i < carteiraAcoes.length; i++) {
  console.log(carteiraAcoes[i]);
}

// var index = 0;
// while (index <= carteiraAcoes.length) {
//     console.log(carteiraAcoes[index]);
//     index++;
// }