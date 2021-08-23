//Declaração de decisão
//Seletores
/* 
/-----Explicação Conceitual----/
Se (condição for atendida) então {
instrução;
}
*/


var prompt = require("prompt-sync")();

var estaVacinado = true;

var resposta = prompt("Você está vacinado? Responda SIM ou NÃO");

estaVacinado = resposta == "SIM";
var texto = 'Que pena, mas já já é a sua vez.';

if (estaVacinado)
    texto = "Parabéns, não deixe de tomar a segunda dose."
        console.log(texto);