/*
Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência.
*/
const prompt = require("prompt-sync")();

var num = prompt("Digite um número inteiro: ");
var numInt = parseInt(num);

var total = 0;
    for (let i = numInt; i > 0; i--) {
        total += i;
        console.log("Num:",i);
    }
console.log("Soma:",total);
