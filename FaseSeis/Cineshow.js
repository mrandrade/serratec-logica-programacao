/*
CineShow tem 7 assentos disponíveis para a sessão das 18h: 43 a 50.
A bilheteria quer vender esses ingressos, sendo que a cadeira 46 é preferencial e não pode ser vendida.
*/
const prompt = require("prompt-sync")();
//Entrada

//Processamento
for (var i = 43; i < 50; i++){
    var poltrona = prompt("Poltrona comum ou preferencial? C ou P");

    if(poltrona == "P" && i != 46) {
        console.log("Essa poltrona não é preferencial");
        continue;
    }
    console.log("Ingreso " + i + " vendido.")
}
//Saída

//para (inicializar, condição, final);
var i = 43;
for (; i < 50;){
    var poltrona = prompt("Poltrona comum ou preferencial? C ou P");

    if(poltrona == "P" && i != 46) {
        console.log("Essa poltrona não é preferencial");
        continue;
    }
    console.log("Ingreso " + i + " vendido.")
    i++
}