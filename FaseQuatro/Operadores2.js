//Relacionais
var aluno = "";
var presente = (aluno != "");
console.log("Aluno está presente?");
console.log(presente);
//Logicos
//Boolean
var maria = true; //false
var carol = true; //false
//Para saber se AMBOS alunos estão presentes.
var estaoPresentes = maria && carol;

/*
P        Q           &&
--------+-----------+----
true    |true       |true
true    |false      |false
false   |true       |false
false   |false      |false
*/

//var estaoPresentes = (true && true);
console.log("estao presentes?", estaoPresentes);

//Operador OU
//Quando QUALQUER dos valores é verdade.
var servidorDragao = true;
var serverGuerilha = true;

var entrar = servidorDagrao || serverGuerilha;

console.log("estou conectado no discord", entrar);

/*
P        Q           ||
--------+-----------+----
true    |true       |true
true    |false      |true
false   |true       |true
false   |false      |false
*/

//0 - False
//1 - True

/*
  P      Q      E -> Equivale a multiplicação (*).
-----+--------+----
1    |1       |1
1    |0       |0
0    |1       |0
0    |0       |0
*/

//Disjunção ou ||
/*
  P      Q      OU -> Equivale a soma (+).
-----+--------+----
1    |1       |1 (não é zero)
1    |0       |1
0    |1       |1
0    |0       |0
*/

//Operador Unário
//Negação - NOT !
/*
P        NOT          
--------+--------
true    |false      
false   |true      
*/
var prof = true;

var serverGalera = !prof;

console.log("Posso entrar no server de geral?", serverGalera);

/*
P        NOT  -> Equivale a menos (-).        
--------+--------
0       | -0      
1       | -1      
*/

// var resposta = true && true && true
// var motoristaProfissional = A e B e C;

var moto = true;
var carro = true;
var vuc = true;

var motoristaProfissional = (moto && carro) && vuc;
        " "               = (true         ) && vuc;
        " "               = true            && vuc;
        " "               = true            && vuc;
        " "               = false;
console.log("É motorista profissional?", motoristaProfissional);