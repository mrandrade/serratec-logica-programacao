/*
Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
a.	x - y M a
b.	x - y * a M c mod y
c.	y <> c
d.	x * y <> c
e.	c mod y mi y mod c
f.	a m b
g.	z / a + x * y - 5 MI b
h.	c * z + 2 ig a * x + y
i.	c ig z + b
j.	y * 2 <> 7 - b
*/

//Entrada
var x = 6.0;
var y = 2;
var z = 4000;
var a = 8;
var b = 7.5;
var c = 12;
//Processamento
var calculo1 = (x - y > a);
console.log(calculo1);
var calculo2 = (x - y * a > c % y);
console.log(calculo2);
var calculo3 = (y != c);
console.log(calculo3);
var calculo4 = (x * y != c);
console.log(calculo4);
var calculo5 = (c % y <= y % c);
console.log(calculo5);
var calculo6 = (a < b);
console.log(calculo6);
var calculo7 = (z / a + x * y - 5 >= b);
console.log(calculo7);
var calculo8 = (c * z + 2 == a * x + y);
console.log(calculo8);
var calculo9 = (c == z + b);
console.log(calculo9);
var calculo10 = (y * 2 != 7 - b);
console.log(calculo10);