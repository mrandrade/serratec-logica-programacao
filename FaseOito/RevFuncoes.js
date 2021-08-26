//Características da função:
//guardar um valor numa variável.
//utilizar dentro expressão.
//utilizar o retorno como parâmetro de outra função.
//desprezar o valor.
// função: identificador; parâmetro; retorno.

function bomDia() {
    //codigo que será executado no futuro
    return "Bom Dia!";
}

//chamada da função
var texto = bomDia();

function multiplicar(numero) {
    return numero * 2;
}

var total = 2 + 2 + multiplicar(5);
console.log("Total: ", total);

//Calculadora com função
function calcular(parcelaUm, operador, parcelaDois) {
    switch (operador) {
        case "+": conta = parcelaUm + parcelaDois; break;
        case "-": conta = parcelaUm - parcelaDois; break;
        case "*": conta = parcelaUm * parcelaDois; break;
        case "/": conta = parcelaUm / parcelaDois; break;
        }
    return conta;
}
var resp = calcular(2, "+", 2);
console.log(resp);

