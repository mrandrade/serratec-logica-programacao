/* 
O shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade.
antes de entrar, a pessoa deve reponder se o indicador está verde ou vermelho.
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.
*/

//const prompt = require("prompt-sync")();

//Entradas
console.log("/----Sanitários----/")
var cor = "vermelho"//prompt("O indicador está verde ou vermelho? ");
//Processamento
var banheiroLiberado = (cor != "vermelho");
//Saida
var saida = "";

if (banheiroLiberado)//Se o valor for true entra nesse seletor.
    saida = "Pode entrar no sanitário";
else//Se o valor for false entra nesse seletor.
    saida = "Aguarde antes de entrar";

console.log(saida);