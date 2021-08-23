//Você é maior de idade?

//A linha abaixo cria um prompr dentro do VSCode
var prompt = require("prompt-sync")();

var idade = prompt("Você é maior de idade? Digite S ou N");

//Relacionais
var maior = idade == "S";
console.log(maior);
