/*
O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.
*/

//Numeros primos: 0, 2, 3, 5.
//Múltiplos de quatro: 1000,1004,1008,1012.
/*----Usando operadores aritméticos----*/
//Entrada
var somaMult = 1004 + 1008 + 1012 + 1016;
var subMult = 0 + 2 + 3 + 5;
//Processamento
var subMultPorPrimos = somaMult - subMult;
//Saída
console.log("A soma dos 4 primeiros múltiplos de 4 acima de mil é", somaMult + ".");
console.log("A soma dos 4 primeiros números primos a partir de zero é", subMult + ".");
console.log("O resultado da soma dos 4 primeiros múltiplos de 4 acima de mil,\n subtraindo dos 4 primeiros números primos a partir de zero é", subMultPorPrimos + ".");

/*----Usando o FOR----*/
//Entrada
const multQuatro = [1004,1008,1012,1016];
const numPrimos = [0, 2, 3, 5];
var somaMult = 0;
var subMult = 0;
//Processamento
for (var i = 0; i < multQuatro.length; i++) {
    somaMult += multQuatro[i];
}
for (var i = 0; i < numPrimos.length; i++) {
    subMult += numPrimos[i];
}
//Saída
var subMultPorPrimos = somaMult - subMult;
console.log("A soma dos 4 primeiros múltiplos de 4 acima de mil é", somaMult + ".");
console.log("A soma dos 4 primeiros números primos a partir de zero é", subMult + ".");
console.log("O resultado da soma dos 4 primeiros múltiplos de 4 acima de mil,\n subtraindo dos 4 primeiros números primos a partir de zero é", subMultPorPrimos + ".");