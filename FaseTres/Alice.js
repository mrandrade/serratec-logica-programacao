/*
Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
*/
//Entrada
var jogos = 345.00;
var videogame = 1545.00;
var parcelsSemJuros1;
var parcelsSemJuros2;
var parcelsComJuros;
//Processamento

parcelsSemJuros1 = (jogos + videogame) / 3;
parcelsSemJuros2 = (jogos + videogame) / 5;
parcelsComJuros = ((jogos + videogame) + (jogos + videogame) * 0.15) / 10;

//Saída
console.log(parcelsSemJuros1);
console.log(parcelsSemJuros2);
console.log(parcelsComJuros);