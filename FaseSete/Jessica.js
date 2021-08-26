/*
    Jessica tem um sapateira com 5 sapatos.
*/

const prompt = require("prompt-sync")();

var sapato0 = "";
var sapato1 = "";
var sapato2 = "";
var sapato3 = "";
var sapato4 = "";
const numero = prompt("Qual é o número da gaveta? ");
const calcado = prompt("Qual sapato você quer guardar? ");

//Isso é o que não deve se fazer!
if (numero == "0") {
  sapato0 = calcado;
} else if (numero == "1") {
  sapato1 = calcado;
} else if (numero == "2") {
  sapato2 = calcado;
} else if (numero == "3") {
  sapato3 = calcado;
} else if (numero == "4") {
  sapato4 = calcado;
}

numero = prompt("Qual o número da gaveta para ver? ");
if (numero == "0") {
    calcado = sapato0;
  } else if (numero == "1") {
    calcado = sapato1;
  } else if (numero == "2") {
    calcado = sapato2;
  } else if (numero == "3") {
    calcado = sapato3;
  } else if (numero == "4") {
    calcado = sapato4;
}
  
console.log("Na gaveta", numero, "está guardado o calçado", calcado);

//Array
//var vetor = new Array(5);
var sapato = [];

var sapato0 = "Sandalia";
var sapato1 = "Bota";
var sapato2 = "rasteirinha";
var sapato3 = "Tenis Azul";
var sapato4 = "Scarpin";

sapato[0] = "Sandalia";
sapato[1] = "Bota";
sapato[2] = "Rasteirinha";
sapato[3] = "Tenis Azul";
sapato[4] = "Scarpin";