/*
O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero.
*/
const prompt = require("prompt-sync")();

var abcXuxa = (`
A de amor
B de baixinho
C de coração
D de docinho
E de escola
F de feijão
`);

do {
    console.log(abcXuxa);
    resposta = prompt("Você deseja apreciar novamente essa linda música? S == 1 ou N == 0 ");
} while (parseInt(resposta) == 1);