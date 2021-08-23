/* 
O shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade.
antes de entrar, a pessoa deve reponder se o indicador está verde ou vermelho.
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.
*/

const prompt = require("prompt-sync")();

console.log("=== Shopping - Sanitários ===");

console.log("Tem uma pessoa na porta do banheiro querendo entrar.");
//Entradas
var cor = "verde"//prompt("O indicador está verde ou vermelho? ");
//Processamento
var liberado = (cor != "vermelho");
//Saida
var saida = "Aguarde antes de entrar";

if (liberado)
    saida = "Pode entrar no sanitário";

console.log(saida);

// if (liberado) {
//     console.log("Pode entrar!");
// } else {
//     console.log("Está ocupado!");
// }
