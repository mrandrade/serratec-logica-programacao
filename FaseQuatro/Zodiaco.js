/*
O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
*/
const prompt = require("prompt-sync")();
//Entrada
var mesNasc = prompt('Digite o mês do seu nascimento: ');
var diaNasc = prompt("Digite o dia do seu nascimento: ");
var éAquárioMesJan = mesNasc == 1;
var éAquárioMesFev = mesNasc == 2;
var éAquarioDiaJan = 21 <= diaNasc && diaNasc <= 31;
var éAquárioDiaFev = 1 <= diaNasc && diaNasc <= 19;
//Processamento
if (éAquárioMesJan && éAquarioDiaJan) {
    console.log("Parabéns! Você é inteligente!"); //Saída
}else if (éAquárioMesFev && éAquárioDiaFev) {
    console.log("Parabéns! Você é inteligente!"); //Saída
} else {
    console.log("Que pena... Você poderia de ter sido de aquário."); //Saída
}