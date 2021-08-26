/*
Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
*/

const prompt = require("prompt-sync")();
var dataAtual = new Date().getDate();

console.log("*** Sistema de Gerenciamento da Universidade ***");

var numeroBoleto = prompt("Informe o número do boleto: ");
var diaPag = prompt("Informe o dia do pagamento: ");
var desconto = (diaPag >= 10 && diaPag <= 13);

if (desconto) {
     true
}
else {
     false
}

console.log("Número do Boleto: ", numeroBoleto);
console.log("Dia do pagamento: ", diaPag);
console.log("Desconto na próxima mensalidade? ", desconto);