//Binário

//operadores esquerda operador operando direita
2 + 2
//Unários
    - 5
    + 3

var pergunta = true;
pergunta = false;

var divisao = 5 / 2;
divisao = 5 % 2; //resto da divisão inteira
console.log("resto: " + divisao);

var inteiro = Math.trunc(5/2);
console.log(inteiro);

//Relacionais
var maior = 2 > 3;
console.log(maior);

var maiorIgual = 3 >= 3;
console.log(maiorIgual);

/*Operadores relacionais - Dois operandos
    igual ==
    diferente !=
    maior >
    menor <
    maior ou igual >=
    menor ou igual <=
*/

// comentário de um linha - Atalho VSCode - Ctrl ;
/* múltiplas linhas */

var nome1 = "Jaime";
var nome2 = "Paulo";
//comparação feita por caractere!!
var igual = nome1 == nome2;
console.log("Os nomes são iguais?", igual);

var igual = nome1 != nome2;
console.log("Os nomes são iguais?", igual);
//Tipo de Variável
console.log(typeof nome1);