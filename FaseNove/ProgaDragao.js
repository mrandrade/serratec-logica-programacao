/*
No jogo, você vai ter que escolher entre 3 armas para enfrentar o grande dragão malvado "Progradragão". As armas são uma espada, uma faca e um sapato. Somente uma delas é a opção que garante uma vitória contra o dragão, as outras duas vão te transformar em churrasquinho.

Antes de começar o jogo, o herói será convidado a participar de um Squad. Esse time o ajudará a encontrar o caminho até o castelo do monstro.

Para destruir o Progradragão, precisamos avançar por **#DezFases** desafiadoras e eletrizantes. Será muito conteúdo, em pouco tempo... portanto, prepare-se!

Console:
"Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!"
"─────▄████▀█▄"
"───▄█████████████████▄"
"─▄█████.▼.▼.▼.▼.▼.▼▼▼▼"
"▄███████▄.▲.▲▲▲▲▲▲▲▲"
"████████████████████▀▀"

"Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪"
*/
const prompt = require("prompt-sync")();

var arma = prompt("Digite S, E ou F: ").toUpperCase();

var texto = " ";
var sorteio = Math.floor(Math.random() * 3);

const armas = ["S", "E", "F"];
var dragao = armas[sorteio];

//Sapato ganha Faca, Faca ganha de Espada, Espada ganha do Sapato.

if (dragao == arma) {
  texto = "Ninguém vai ganhar, ninguém vai perder... vai todo mundo perder";
} else if (
  (dragao == "S" && arma == "F") ||
  (dragao == "F" && arma == "E") ||
  (dragao == "E" && arma == "S")
) {
  console.log("Arma ganha!");
} else {
  console.log("Você ganha!");
}
console.log(texto);
