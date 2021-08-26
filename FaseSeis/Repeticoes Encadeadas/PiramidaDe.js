/*
O jogo “PirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.
PirâmiDe: 4
D
DD
DDD
DDDD
*/

const prompt = require("prompt-sync")();

let altura = Number(prompt("Altura da pirâmide: "));
for (let i = 0; i < altura; i++) {
    var d = "D";
    for (let j = 0; j < i; j++) {
        d += "D";
    }
    console.log(d);
}