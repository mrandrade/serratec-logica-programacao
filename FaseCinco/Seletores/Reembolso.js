/*
Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100 Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom desconto.
Reembolso: R$ 33

:: Restaurante Braya ::
Cupom desconto para sua próxima visita:
** Trinta e Três Reais
*/

const prompt = require("prompt-sync")();
console.log(":: Restaurante Braya ::")
var valorComida = prompt("Digite o valor da comida: ")
valorComidaInt = parseInt(valorComida);

if (valorComidaInt >= 20 && valorComidaInt <= 100) {
    console.log("Cupom desconto:", valorComidaInt)
}