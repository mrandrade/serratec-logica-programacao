/*
O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. 
O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
**Aguardando a resposta certa**
*/

//----Teste While ----/
const ler = require("prompt-sync")();

//Entrada
var telefone = ler("Ligando para você: ")
//Processamento
var naoAcertou = telefone != "90show";
//Saída
while (naoAcertou) { //Enquanto for true, o algoritmo repete. Ou seja, enquanto não acertar repete.
    console.log("Que pena...");
    
    telefone = ler("Ligando para você: ");
    naoAcertou = (telefone != "90show");

}
console.log("Você ganhou uma camisa!");