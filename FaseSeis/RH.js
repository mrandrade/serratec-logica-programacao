/*
O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.
*/

var nomes = [
    "Moises",
    "Matheus",
    "Ana",
    "Alberto",
    "Ulisses"
]

for (i = 0; i < nomes.length; i++){
    var n = nomes.length[i]
    console.log(n)
}

const prompt = require("prompt-sync")();

var nome = "string";
// var vogais = [a, e, i, o, u];
//identificador, parâmetro, retorno.
// do {
nome = prompt("Qual a primeira letra do seu nome? ");
// switch (nome) {
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case 'U':
//         vogal = true;
//         break;
//     default:
//         vogal = false;
// }

nome = nome.substring(0, 1);
var pri = nome.toUpperCase();


vogal = (pri == "A") || (pri == "E") || (pri == "I") || (pri == "O") || (pri == "U");

//Saída
if (vogal)
    console.log("Sua entrevista será segunda");
else 
    console.log("Sua entrevista será terça");
//} while (pri != "");

console.log("RH deseja um ótimo dia!");

//Declaração da função
function letraMaiuscula() { //Ideal é separar as funções em arquivos.
    //programação da função que um dia será executada, no futuro.
    console.log("função foi chamada!")
}

//Chamada a função: par de parênteses na frente do identificador
letraMaiuscula();

function obterPrimeiraLetra() {
    nome = nome.toUpperCase();
    return nome.substring(0, 1);
}

