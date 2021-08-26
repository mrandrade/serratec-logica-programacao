/*
No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.
*/

const prompt = require("prompt-sync")();
var carta;
var soma = 0;

while (soma < 21) {
    carta = prompt("Digite o valor da carta: ");
    var cartaInt = parseInt(carta);
    soma += cartaInt;
}

if (soma == 21) {
    console.log("Você teve muita sorte. Você ganhou!");
} else
    console.log(`Que pena... O cassino ganho ${soma}`);