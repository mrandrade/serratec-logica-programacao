/*
Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).
*/

const prompt = require("prompt-sync")();

//Entrada

var valor1 = prompt("Digite até que número você deseja contar: ");
var valor2 = prompt("Você deseja visualizar (1) Impar ou (2) Par: ");

//Processamento

valor1Int = parseInt(valor1);
valor2Int = parseInt(valor2);


var inicio = 0;
do {
    inicio += 1;
    if (valor2Int == 2 && inicio % 2 == 0) {
        console.log("É par: ", inicio); //Saída
    }
    else {
        console.log("É ímpar: ", inicio); //Saída
    }
} while (inicio != valor1Int)
