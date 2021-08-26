var equipeUm = 0;
var equipeDois = 0;
var pontoUm = 0;
var pontoDois = 0;

do {
  var nome = prompt("Nome da equipe: ");
  var ponto = prompt("Pontuação do time: ");

  if (ponto > pontoUm) {
    pontoUm = ponto;
  } else if (ponto > pontoDois) {
    pontoDois = ponto;
    equipeDois = nome;
  }
} while (nome != "");

console.log("== Pódio ==");
console.log("Primeiro lugar" + equipeUm);
console.log("Segundo lugar" + equipeUm);