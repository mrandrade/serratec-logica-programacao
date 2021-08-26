/*
    As linhas de ônibus da capital são identificados por números. A empresa "Pão de Açucar" opera 8 linhas.
    O passageiro irá digitar o número do ônibus que está vindo, e o program mostra o nome da linha/trajeto.
*/

const prompt = require("prompt-sync")();

//Atribuição de cada valor no vetor
console.log("Esse ônibus tem o projeto: " + linhas)
const linhas = [];
linhas[0] = "1. Rosário x Pimenteiras";
linhas[1] = "2. Perpétuo x Fonte Santa";
linhas[2] = "3. Caleme x Alto";
linhas[3] = "4. Pimentel x Vale Paraíso";
linhas[4] = "5. Vila Muqui x Várzea";
linhas[5] = "6. Comary x Meudon";
linhas[6] = "7. Rodoviaria x Vale Alpino";
linhas[7] = "8. Centro x Canoas";
//Um array são várias variáveis, mas tem somente um identificador.
//Arry pode ser estático (definido) e dinâmico (indefinido).
//O Arry também pode ser homogêneo (mesmo tipo de dados) e heterogêneo (tipos de dados diferentes).
//Zero-Based
var numero = prompt("Digite o número do ônibus que está vindo: ");

var onibus = parseInt(numero) + 1;

var linha = linhas[onibus];

console.log("Esse ônibus tem o trajeto: " + linha);

/*
Inicialização da variável
var linhasOnibus = [
    "Rosário x Pimenteiras",
    "Perpétuo x Fonte Santa",
    "Caleme x Alto",
    "Pimentel x Vale Paraíso",
    "Vila Muqui x Várzea",
    "Comary x Meudon",
    "Rodoviaria x Vale Alpino",
    "Centro x Canoas"
]
*/