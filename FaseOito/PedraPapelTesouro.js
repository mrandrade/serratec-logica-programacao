
const prompt = require("prompt-sync")();

function pedraPapelTesoura() {
    var pessoa = prompt("Escolha Pedra, Papel, Tesoura: ");
    var sorteio = Math.floor(Math.random() * 3);

    const jogo = ["P", "A", "T"];

    var computador = jogo[sorteio];

    if (pessoa == computador) {
        console.log("Empate");
    }
    else
        if (
            (pessoa == "p" && computador == "A") ||
            (pessoa == "A" && computador == "T") ||
            (pessoa == "T" && computador == "P")
        ) {
            console.log("Computador ganha!");
        }
        else {
            console.log("você ganha!");
        }
}

pedraPapelTesoura()