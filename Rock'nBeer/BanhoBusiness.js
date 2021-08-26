/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Luciana Santos
 * Título: Banho Business
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021

## Descrição: O administrador da Rodoviaria Interestadual Encontro das Águas decidiu cobrar pelo tempo de banho no seu estabelecimento. Crie um simples sistema de vendas e programe o chuveiro para desligar aos 10 minutos de banho;

## Dicas:
• Venda a promoção ao cliente.
• Use as funções: prompt, switch e if. 
• Informe o tempo do banho para o cliente. 
• E desligue o chuveiro.
*/
const prompt = require("prompt-sync")();
console.log("**Stay Clean - Rodoviária Encontro das Águas**")
console.log("Opção A - Banho Curto - 10 minutos - R$ 15.00");
console.log("Opção B - Banho Longo - 15 minutos - R$ 22.50");
console.log("Opção C - Banho Livre - R$ 2.00 p/ minuto");
var escolhaUsuario = prompt("Escolha uma das opções de banho acima:").toUpperCase();

var tempoAtual = 0;
const tempoCurto = 10;
const tempoLongo = 15;
var tempoLivre = Math.trunc(Math.random() * 25)

const valorTempoCurto = 1.5; //Multiplicador
const valorTempoLongo = 1.5;
const valorTempoLivre = 2.0;

var valorAPagar;

if (escolhaUsuario == "A") {
    console.log("--- Banho Iniciado! ---")
    while (tempoAtual < tempoCurto) {
        console.log(`Ainda há tempo! Tempo: ${tempoAtual+1} minuto(s)`)
        tempoAtual++
    }
    console.log("Seu tempo acabou!");
    valorAPagar = tempoCurto * valorTempoCurto;
    console.log("Valor a pagar em reais:", valorAPagar.toFixed(2));
    console.log("Obrigado pela visita. Tenha uma boa viagem!");
}
else if (escolhaUsuario == "B") {
    console.log("--- Banho Iniciado! ---")
    while (tempoAtual < tempoLongo) {
        console.log(`Ainda há tempo! Tempo: ${tempoAtual+1} minuto(s)`)
        tempoAtual++
    }
    console.log("Seu tempo acabou!");
    valorAPagar = tempoLongo * valorTempoLongo;
    console.log("Valor a pagar em reais:", valorAPagar.toFixed(2));
    console.log("Obrigado pela visita. Tenha uma boa viagem!");
}
else if (escolhaUsuario == "C") {
    console.log("--- Banho Iniciado! ---")
    while (tempoAtual < tempoCurto) {
        console.log(`Ainda há tempo! Tempo: ${tempoAtual+1} minuto(s)`)
        tempoAtual++
    }
    console.log("Seu tempo acabou!");
    valorAPagar = tempoLivre * valorTempoLivre;
    console.log("Valor a pagar em reais:", valorAPagar.toFixed(2));
    console.log("Obrigado pela visita. Tenha uma boa viagem!");
} else {
    console.log("Programa finalizado. Por favor, retorne ao menu de opções.")
}