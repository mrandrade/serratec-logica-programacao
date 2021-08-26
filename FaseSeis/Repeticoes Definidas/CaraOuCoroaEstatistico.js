/*
O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.
*/

function geraValor() {
  return Math.round(Math.random());
}
var seCara = 0;
var seCoroa = 0;

for (let i = 0; i < 1000; i++) {
  var numAletorio = geraValor();
  if (numAletorio == 0) {
    seCara += 1;
  } else {
    seCoroa += 1;
  }
}
console.log((seCara / 1000) * 100);
console.log((seCoroa / 1000) * 100);
