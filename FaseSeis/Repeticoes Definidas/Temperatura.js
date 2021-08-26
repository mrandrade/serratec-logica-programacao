/*
Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit.
*/

var limiteTemperatura = 40;

for (let i = 0; i <= limiteTemperatura; i++) {
    temperaturaFahreheit = (i * 1.8) + 32;
    console.log("Celsius: "+i+" Fahrenheit: "+Math.trunc(temperaturaFahreheit));
}