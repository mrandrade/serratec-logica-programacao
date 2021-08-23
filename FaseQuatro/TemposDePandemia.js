/*
Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
*/
const prompt = require("prompt-sync")();
//Entrada
var temperatura = prompt("Digite a temperatura: ");
var mascara = prompt("Usa máscara (S ou N): ");
var tempLimite = temperatura < 37.5;
var usaMascara = mascara == "S";
var segueRegras = (tempLimite && usaMascara);
//Processamento
console.log("Autorizar a entrada:", segueRegras);
/*
if (segueRegras)
    console.log("Sua entrada foi permitida!"); //Saída
else
    console.log("Sua entrada foi negada! Sua temperatura está acima de 37.5 ou você está sem máscara."); //Saída
*/