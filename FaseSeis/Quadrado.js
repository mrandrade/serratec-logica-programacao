/*
O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.
*/
//Entrada
var num = 1;
//Processamento
var quadrado = numero * numero; //^ 2 || math.Pow()
//Saída
var resposta = num + "^ 2" + quadrado;
console.log(resposta);

for (numero = 1; numero < 10; numero++) {
  var resposta = numero * numero;
  console.log(numero, "^ 2", resposta);
}
