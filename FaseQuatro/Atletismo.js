const ler = require("prompt-sync")();
//Entrada
var tempo = ler("Qual foi o seu tempo de qualificação para as Olimpíadas?\n");
//Processamento
var naoConseguir = tempo > 10.00;
//Saída
while (naoConseguir) { //Enquanto for true, o algoritmo repete. Ou seja, enquanto não acertar repete.
    console.log("Que pena... Tente novamente!");
    
    tempo = ler("Qual foi o seu tempo de qualificação para as Olimpíadas?");
    naoConseguir = (tempo > 10.00);
}
console.log("Você vai para Tóquio! Seu tempo foi abaixo de 10s.");

const ler = require("prompt-sync")();
//Entrada
var tempo = ler("Qual foi o seu tempo de qualificação para as Olimpíadas?\n");
//Processamento
var naoConseguir = tempo > 10.00;
//Saída
while (naoConseguir) { //Enquanto for true, o algoritmo repete. Ou seja, enquanto não acertar repete.
    console.log("Que pena... Tente novamente!");
    
    tempo = ler("Qual foi o seu tempo de qualificação para as Olimpíadas?");
    naoConseguir = (tempo > 10.00);
}
console.log("Você vai para Tóquio! Seu tempo foi abaixo de 10s.");