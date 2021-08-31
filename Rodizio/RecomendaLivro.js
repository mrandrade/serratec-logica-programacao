/*
# Serratec - Parque Tecnológico Região Serrana
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Autor (Proposta): Luciana Gasparini
 * Squad de Origem (Proposta): DevAneios (Squad 3)
 * Arquivo: recomendaLivro.js
 * Data: 22/08/2021
### Descrição:
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. 
Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.
*/

const prompt = require("prompt-sync")();
console.log("----------------------------------------------------------------------------");
console.log("---------- Olá, seja bem-vindo(a) ao clube de leitura do SERRATEC! ---------");
console.log(`---------- Eu sou um "IA" especializada em recomendação de livros. ---------`)
console.log("----- Se você deseja alguma recomendação, responda as questões abaixo: -----")
console.log(`-- Lembre-se de não utilizar acentos e nem "ç" ao digitar as informações! --`)
console.log("----------------------------------------------------------------------------");
var pergunta1 = prompt("Qual é sua leitura atual? ");
var nomeLivro = pergunta1.toLowerCase();
var requisitoNomeLivro = livroRecomendado();

function livroRecomendado() {
    listaRecomendados = ["moby dick", "duna", "revolucao dos Bichos", "o alienista", "o homem invisivel", "eu, robo"]
    for (let i = 0; i < listaRecomendados.length; i++) {
        if (nomeLivro == listaRecomendados[i]) {
            return true;
        }
    }
}


if (!requisitoNomeLivro) {
    var pergunta2 = prompt("Quantas páginas tem o livro? ");
    var pergunta3 = prompt("Em quantos dias você precisa lê-lo? ");
    var qtdePags = parseInt(pergunta2);
    var qtdeDias = parseInt(pergunta3);
    var requisitoPagDia = qtdePags >= 1 && qtdeDias >= 1;
    var pagPorDia = Math.trunc(qtdePags / qtdeDias);

    if (requisitoPagDia) {
    
        if (qtdePags <= 100) {
            console.log(`${pergunta1}, eu amo esse livro!`);
            console.log(`Esse livro tem ${qtdePags} páginas.`);
            console.log(`Cê, me falou que você precisa ler em ${pagPorDia} dia(s).`);
            console.log(`Legal, você curte leituras curtas. Te recomendo: Revolucao dos Bichos e O Alienista.`);
        }
        else if (101 <= qtdePags || qtdePags <= 499) {
            console.log(`${pergunta1}, eu amo esse livro!`);
            console.log(`Esse livro tem ${qtdePags} páginas.`);
            console.log(`Cê, me falou que você precisa ler em ${pagPorDia} dia(s).`);
            console.log(`Legal, você curte leituras médias. Te recomendo: O Homem Invisivel e Eu, Robo.`);
        }
        else if (500 <= qtdePags) {
            console.log(`${pergunta1}, eu amo esse livro!`);
            console.log(`Esse livro tem ${qtdePags} páginas.`);
            console.log(`Cê, me falou que você precisa ler em ${pagPorDia} dia(s).`);
            console.log(`Legal, você curte leituras longas. Te recomendo: Moby Dick e Duna.`);
        }
    }
}
else {
    console.log("Por favor, informe outro livro.")
}
