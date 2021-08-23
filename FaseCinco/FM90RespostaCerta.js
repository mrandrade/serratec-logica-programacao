/*
**Melhor de três**
O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

//para (<inicializacao variável de controle>; <condicao>; <final>)
// <instrucao>

for (var i = 0; i < 5; i++){
    //prompt("Qual a resposta?");
    var numero = i + 1; //Declarar essa variável é uma boa prática.
    console.log("Parabens ouvinte " + numero + ", você ganhou um par de inguressas para Jumanji!");
}
console.log("Nossos 5 ouvintes são show!");