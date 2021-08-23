/*
O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. 
O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
**Aguardando a resposta certa**
*/
//Primeiro particularizar, depois generalizar.

//Repetição Indefinida - é semelhante ao if.
//Do...While - Roda pelo menos uma vez.
//While - Pode nem rodar uma vez.

//---- Teste Do-While ----/

const ler = require("prompt-sync")();
do {
    //Entrada
    var telefone = ler("Ligando para você: ")
    //Processamento
    var errado = telefone != "90show";

    //Saída
    if (errado)
        console.log("Que pena../");
    else
        console.log("Você ganhou uma camisa!");
} while (errado); // O valor da expressão é verdadeiro? Se sim, fim do programa. Se não, repita!

//----Teste While ----/

const ler = require("prompt-sync")();

//Entrada
var telefone = ler("Ligando para você: ")
//Processamento
var naoAcertou = telefone != "90show";
//Saída
while (naoAcertou) {
    console.log("Que pena../");
    
    telefone = ler("Ligando para você: ");
    naoAcertou = (telefone != "90show");

}
console.log("Você ganhou uma camisa!");