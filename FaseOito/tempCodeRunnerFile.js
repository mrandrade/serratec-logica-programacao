var frase = "Eu não vou terminar esse curso. Eu não tenho computador. Hoje não está sol.";
// var nova = substituirTodos(frase, "não", "sim");
// console.log(nova);

function substituirTudo(texto, antigo, novo) {
    var resultado = texto;
    do {
        resultado = resultado.replace(antigo, novo);
        var posicao = resultado.indexOf(antigo);
    } while (posicao < -1);

    return resultado;
}
var nova = substituirTudo(frase, "não", "certeza");
console.log(nova);