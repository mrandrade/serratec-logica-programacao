/*
    Jessica tem um sapateira com 5 sapatos.
*/

//Array
//var vetor = new Array(5);
var sapato = [];

const numero = prompt("Qual é o número da gaveta? ");
const calcado = prompt("Qual sapato você quer guardar? ");

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


//Atribuição com uma posição numérica
//Índice
sapato[numero] = calcado;

numero = prompt("Qual é o número da gaveta? ");
  
//recuperação por índice, por posição numérica
calcado = sapato[numero];
console.log("Na gaveta", numero, "está guardado o calçado", calcado);

//String sapato = new Arry[];- Outras linguagens.

var quantidade = 6;
//novo
quantidade++;

console.log("extensão", "tamanho", sapato.length);

//Qual a posição?
sapato[sapato.length] = "Pantufa";

