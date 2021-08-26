/*
No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
*/

const prompt = require("prompt-sync")();

const poesia = "Bora bora bora, bora pro piseiro\nBora bora bora meter a dança de vaqueiro";

console.log("Leia essa poesia:");
var resposta = "S";

//for == sei o início e fim == contadora;

do {
    console.log(poesia);
    resposta = prompt("Você deseja apreciar novamente os versos? S ou N");
} while (resposta == "S");