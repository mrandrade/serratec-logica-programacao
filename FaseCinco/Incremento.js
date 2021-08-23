//Incremento

var numero = 0;
console.log(numero);
numero = 1;
console.log(numero);
numero = numero + 1;
console.log(numero);
//Contagem, contadora
numero++;
console.log(numero);
//Decremento
numero--;
console.log(numero);
// Atribuição e Incremento
var numero = 0;
var resposta = numero++; //Primeiro há a atribuição do conteúdo de número, depois que é incrementado.
console.log(numero);
console.log("resposta", resposta);

++numero;
console.log("++antes", numero);

var total = ++numero;
console.log("total", total);
console.log("numero", numero);

//++antes == incremento primeiro, retorna depois.
//depois++ == retorna primeiro, incrementa depois.

//Soma abreviada
var num = 0;
//São expressões equivalentes!
num = num + 3;
num += 3;

num = num - 5;
num -= 5;

var texto = "Olá ";
texto += "Matheus";
console.log(texto);