/* A função ecoMontanha terá dois parâmetros: O primeiro
é o texto a ser repetido. O segundo é a qtde de vezes
que o texto será repetido.
*/

//Declaração da função == única vez
function ecoMontanha(escuta) {
    return escuta + " " + escuta;
}
//Chamada da função == quantas vezes eu precisar
var texto = ecoMontanha("Cantor");
console.log(texto);
texto = ecoMontanha("Montanha");
texto = console.log(texto);
ecoMontanha("Ciclista");
texto = console.log(texto);


// Sem função
var palavra = prompt("Qual a sua plavra? ");
var vezes = prompt("Quantas vezes você vai repetir? ")
var qtde = parseInt(vezes);

for (var i = 0; i < qtde; i++){
    console.log(palavra + " ");
}

function ecoMontanha(palavra, quantidade) {
    var resposta = " ";
    for (var i = 0; i < qtde; i++){
       resposta += palavra + " "; // resposta = resposta + palavra "";
    }
    return resposta; //Return é semelhante ao break.
}

var txt = ecoMontanha("A gente já chegou? ", 10);
console.log(txt);

//Com função
var palavra = prompt("Qual a sua palavra? ");
var vezes = prompt("Quantas vezes irá repetir? ");
var qtde = parseInt(vezes);