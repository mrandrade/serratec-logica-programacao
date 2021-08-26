/*
O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.
*/


const prompt = require("prompt-sync")();

do {
    console.log("**Bem vindo(a) Cara ou Coroa Gentil**")
    console.log("|          Opção 0 - Cara            |");
    console.log("|          Opção 1 - Coroa           |");
    console.log("--------------------------------------")
    var resp = prompt("Escolha uma das opções de aposta acima:")
    
    respInt = parseInt(resp);

    function geraValor() {
        return Math.round(Math.random());
    }
    
    var numAleatorio = geraValor();

    var aposta = respInt == numAleatorio;

    if (aposta) {
        console.log("Sua aposta: ", resp);
        console.log("Acaso: ", numAleatorio);
        break;
    }
    else {
        console.log("Sua aposta: ", resp);
        console.log("Acaso: ", numAleatorio);
    }
} while (resp != numAleatorio);