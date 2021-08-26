const prompt = require("prompt-sync")();

console.log("*** Abecedário da Xuxa ***");

var letra = prompt("Digite uma letra de A a Z: ");

letraUpCase = letra.toUpperCase();

switch (letraUpCase) {
  case "A":
    console.log("A de amor!");
    break;
  case "B":
    console.log("B de baixinho!");
    break;
  case "C":
    console.log("C de coração!");
    break;
  case "D":
    console.log("D de docinho!");
    break;
  case "E":
    console.log("E de escola!");
    break;
  case "F":
    console.log("F de feijão!");
    break;
  case "G":
    console.log("G de gente!");
    break;
  case "H":
    console.log("H de humano!");
    break;
  case "I":
    console.log("I de igualdade!");
    break;
  case "J":
    console.log("J de juventude!");
    break;
  case "K":
    console.log("K de Kylo Ren!");
    break;
  case "L":
    console.log("L de liberdae!");
    break;
  case "M":
    console.log("M de molecagem!");
    break;
  case "N":
    console.log("N de natureza!");
    break;
  case "O":
    console.log("O de obrigado!");
    break;
  case "P":
    console.log("P de proteção!");
    break;
  case "Q":
    console.log("Q de quero-quero!");
    break;
  case "R":
    console.log("R de riacho!");
    break;
  case "S":
    console.log("S de saudade!");
    break;
  case "T":
    console.log("T de terra!");
    break;
  case "U":
    console.log("W de universo!");
    break;
  case "V":
    console.log("A de vitória!");
    break;
    case "W":
    console.log("W de Wikipedia!");
    break;
  case "X":
    console.log("X de Xuxa!");
    break;
  case "Y":
    console.log("Y de Yes!");
    break;
  case "Z":
    console.log("Z de Zumba!");
    break;
  default:
    console.log("Caractere inválido!");
    break;
}