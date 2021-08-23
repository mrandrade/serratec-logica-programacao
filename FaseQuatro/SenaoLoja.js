//!Importante

// Não é boa prática declarar variáveis dentro de ifs.
//Só pode ter apenas uma instrução em cada if.
//O else é sempre vinculado ao if anterior na ordem da indentação.

/* 
/----Explicação Conceitual ----/
if (expressao)
    instrucao_um;
else
    instrucao_dois;    

/----Explicação JavaScript ----/  
var texto = "Maria";

var retorno = true;
if (retorno) //Pode ter qualquer instrução abaixo do if, desde que seja uma só instrução.
    console.log()
    texto = "verdade"
    saudacao()
    if()
*/

/*Escreva um algoritmo para controlar a entrada de clientes em uma loja.
Nessa loja só é permitida a permanência de até 8 pessoas.
O segurança deve avisar quando chegar perto do limite.
*/

const limite = 8;
var qtde = 4; //7 e 8

var liberada = (qtde < limite);
var proximo = (qtde == 7);
//Encadeamento, aninhamento
if (liberada) {
    console.log('Entrada liberada');
        
    if (proximo)
        console.log("Não deixe entrar se estiver acompanhado.");
}
else
    console.log("Aguarde um pouco");

// if (liberada)
//     if (proximo)
//         console.log("Não deixe entrar se estiver acompanhado.");
//     else
//         console.log("Entrada liberada");
// else
//     console.log("Aguarde um pouco");