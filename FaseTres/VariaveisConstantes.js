// var - é possível atribuir novos valores ao longo do programa. Só se declara um vez!!!
// const - não pode alterar o valor ao longo do programa. Não há múltiplas atribuições.
// É prática utilizar as letras minúsculas para variáveis e maiúsculas para as constantes.
// Duas formas de trabalhar com constantes: Como valores em memória, e como identificadores de substituição.

//Constantes de substituição
const ICMS = 18 / 100;

var produto1 = 50.65 * ICMS;
var produto2 = 35.69 * ICMS;
// toFixed() - restringe o número de casas decimais.
// toLocaleString() - formata os dados brutos ao local definido pelo programador.
// toString() - representa textualmente uma instância de um objeto.
console.log(produto1, produto2);

//const URL = 'http://server.com/api';

//obterDadosServidor(URL);

Math.PI