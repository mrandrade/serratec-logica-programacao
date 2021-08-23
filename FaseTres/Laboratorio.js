/*
O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.
*/
const prompt = require("prompt-sync")();
//Entrada
var num = prompt("Digite a capacidade da garrafa: ");
var qtdeAlcool = num * 0.70;
var qtdeGel = num * 0.30;
//Saída
console.log(`A capacidade da garrafa é ${num}ml.`);
console.log(`O volume de álcool é ${qtdeAlcool}ml.`);
console.log(`O volume de álcool é ${qtdeGel}ml.`);