/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Marcos Vinícius
 * Título: Jogo do Milhão
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021
## Descrição: 
No jogo do milhão você deve criar 5 perguntas valendo respectivamente mil, 10 mil, 100 mil, 500 mil e 1 milhão. Cada pergunta deve ter 4 alternativas sendo apenas 1 verdadeira, se você acertar você passa para próxima fase, se errar perde a chance de continuar.
## Dicas:
• Abuse das funções: prompt, switch e if. 
• Esse jogo não precisa de nenhum conhecimento além do que aprendemos.
*/

const prompt = require("prompt-sync")();

console.log("+++++ Bem-Vindo ao Show do Milhão ++++++");
console.log("|  Cada pergunta tem 4 alternativas    |");
console.log("| sendo apenas 1 verdadeira, se você   |");
console.log("|acertar você passa para próxima fase, |");
console.log("|se errar perde a chance de continuar. |");
console.log("++++++++++++++++++++++++++++++++++++++++");

console.log("/--- PRIMEIRA FASE ---/");
console.log("Qual é o triângulo que tem todos os lados diferentes?");
console.log("A. Escaleno");
console.log("B. Equilátero");
console.log("C. Isósceles");
console.log("D. Trapézio");
var pergunta1 = prompt("Resposta: ").toUpperCase();
switch (pergunta1) {
  case "A":
    console.log("Certa resposta! Você ganhou mil reais!");
    break;
  case "B":
  case "C":
  case "D":
    console.log("Que pena... Resposta errada!");
    break;
  default:
    console.log("Resposta inválida!");
}

if (pergunta1 == "A") {
  console.log("/--- SEGUNDA FASE ---/");
  console.log("Qual montanha se localiza entre a fronteira do Tibet com o Nepal?");
  console.log("A. Monte Carlo");
  console.log("B. Monte Fuji");
  console.log("C. Monte Branco");
  console.log("D. Monte Everest");
  var pergunta2 = prompt("Resposta: ").toUpperCase();
  switch (pergunta2) {
    case "A":
    case "B":
    case "C":
      console.log("Que pena... Resposta errada!");
      break;
    case "D":
      console.log("Certa resposta! Você ganhou 10 mil reais!");
      break;
    default:
      console.log("Resposta inválida!");
  }
}
if (pergunta2 == "D") {
  console.log("/--- TERCEIRA FASE ---/");
  console.log("Quantas folhas tem um trevo da sorte?");
  console.log("A. Três");
  console.log("B. Quatro");
  console.log("C. Cinco");
  console.log("D. Seis");
  var pergunta3 = prompt("Resposta: ").toUpperCase();
  switch (pergunta3) {
    case "A":
      console.log("Certa resposta! Você ganhou 100 mil reais!");
      break;
    case "B":
    case "C":
    case "D":
      console.log("Que pena... Resposta errada!");
      break;
    default:
      console.log("Resposta inválida!");
  }
}
if (pergunta3 == "A") {
  console.log("/--- QUARTA FASE ---/");
  console.log("O que é Via Láctea?");
  console.log("A. Marca De Leite");
  console.log("B. Civilização Antiga");
  console.log("C. Galáxia");
  console.log("D. Marca De Carro");
  var pergunta4 = prompt("Resposta: ").toUpperCase();
  switch (pergunta4) {
    case "A":
      console.log("Que pena... Resposta errada!");
      break;
    case "B":
      console.log("Que pena... Resposta errada!");
      break;
    case "C":
      console.log("Certa resposta! Você ganhou 500 mil reais!");
      break;
    case "D":
      console.log("Que pena... Resposta errada!");
      break;
    default:
      console.log("Resposta inválida!");
  }
}
if (pergunta4 == "C") {
  console.log("/--- QUINTA FASE ---/");
  console.log("Eros era um deus de qual mitologia?");
  console.log("A. Eslava");
  console.log("B. Grega");
  console.log("C. Japonesa");
  console.log("D. Germânica");
  var pergunta5 = prompt("Resposta: ").toUpperCase();
  switch (pergunta5) {
    case "A":
      console.log("Que pena... Resposta errada!");
      break;
    case "B":
      console.log("Certa resposta! Você ganhou 1 milhão reais!");
      break;
    case "C":
      console.log("Que pena... Resposta errada!");
      break;
    case "D":
      console.log("Que pena... Resposta errada!");
      break;
    default:
      console.log("Resposta inválida!");
  }
} else {
  console.log("---- Fim do Jogo ----");
}
