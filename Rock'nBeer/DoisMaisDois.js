/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Matheus R. Andrade
 * Título: Dois Mais Dois
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021

## Descrição:
O programa "DoisMaisDois" gera números aleatórios até 10 para responder a seguinte questão: "Quanto é a metade de dois mais dois?". Se o programa acertar a resposta, o programador ganha um milhão de reais. Se ele errar, o programador pode tentar novamente.

## Dicas:
• Crie uma função para gerar os números aleatórios.
• Rode o programa até você se tornar o mais novo milionário do país.
*/

console.log("Quanto é a metade de dois mais dois?")

var respostaCorreta = 2;
var valorRespondido = geraValor() == respostaCorreta;

if (valorRespondido) {
    console.log("A resposta correta é 2.")
    console.log("Parabéns, você ganhou um milhão de reais!");
} else {
    console.log("Que pena...Você errou sua resposta.");
    console.log("Tente novamente!");
}
function geraValor() {
    return  Math.trunc(Math.random() * 10)
}