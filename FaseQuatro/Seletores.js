{
    //const prompt = require("prompt-sync")();

const LIMITE_CLIENTES = 8;
    
console.log("Tem uma pessoa na porta da loja querendo entrar.");
var qtde = 3;//prompt("Quantas pessoas tem na loja agora? ");
    
var permitir = qtde < LIMITE_CLIENTES;
var texto = "";
//se verdadeiro possegue; se for falso salta para próxima linha.
if(permitir)
    texto = "Pode permitir a entrada do cliente que está na fila";
    
console.log(texto);
}