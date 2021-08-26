//String - Cadeia de caracteres
var texto = "uma string é um vetor!";

var trecho = texto[0]
console.log(trecho);

var tamanho = texto.length;
console.log("Tamanho " + tamanho);

//não é de quatro a seis, a partir de 4, seis caracteres.
trecho.substring(4, 6);
console.log(trecho);
//Onde está o primeiro espação do meu texto.
// Quando se usa "-1" é indicativo que não existe nada.
var posicao = texto.indexOf(" ");
console.log("posição do primeiro espaço é", posicao);

var aluno = "x é muito chato e muito rico";
const antigo = "chato";
const novo = "legal";
posicao = aluno.indexOf(antigo);
trecho = aluno.substring(0, posicao);
console.log(trecho);
posicao += antigo.length;
trecho = trecho + novo + aluno.substring(posicao, aluno.length);
console.log(trecho);
/*
function substituir(texto, antigo, novo) {
    
}
*/
//Substitui somente a primeira ocorrência
var aluno = "x é muito chato e muito rico";
trecho = aluno.replace("muito", "pouco");
console.log(trecho);

var maria = aluno.split("muito");
console.log(maria);