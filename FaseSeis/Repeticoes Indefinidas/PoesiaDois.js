/*
No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
*/

// `` - Acento grave é multi linha e não precisa quebrar as linhas.

const prompt = require("prompt-sync")();

console.log("Leia essa poesia:");

const poesia = "Bora bora bora, bora pro piseiro\nBora bora bora meter a dança de vaqueiro";

var resposta = prompt("Você deseja apreciar novamente os versos? S ou N ");

while (resposta == "S") {
     console.log(poesia);
     resposta = prompt("Você deseja apreciar novamente os versos? S ou N");//Break;
}