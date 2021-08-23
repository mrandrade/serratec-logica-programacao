const prompt = require("prompt-sync")();

const LIMITE_CLIENTES = 8;

console.log("Tem uma pessoa na porta da loja querendo entrar.")
var qtde = prompt("Quantas pessoas tem na loja agora? ");

var bloquear = ! (qtde < LIMITE_CLIENTES); // Expressão negada!!!

// == negado !=
// < negado >=
// > negado <= 

console.log("Impedir a entrada?", bloquear);