//Uso do Switch
/*O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.*/

var ler = require("prompt-sync")();

//Entrada
var uf = ler("Qual a sigla da UF de onde você mora? ");

//Processamento
var nomeCompleto = "";
switch (uf) {
  case 'AM': nomeCompleto = "Amazonas"; break;
  case 'AP': nomeCompleto = "Amapá"; break;
  case 'BA': nomeCompleto = "Bahia"; break;
  case 'RJ': nomeCompleto = "Rio de Janeiro"; break;
  case 'rj': nomeCompleto = "Rio de Janeiro"; break;
  case 'sp': nomeCompleto = "São Paulo"; break;
  case 'SP': nomeCompleto = "São Paulo"; break;
  case 'MG': nomeCompleto = "Minas Gerais"; break;
  case 'mg': nomeCompleto = "Minas Gerais"; break;
  case 'ES': nomeCompleto = "Espirito Santo";   break;
  case 'es': nomeCompleto = "Espirito Santo";   break;
  default: nomeCompleto = "Outro estado"; break;
}
/*
if (uf == "AM") {
  nomeCompleto = "Amazonas";
} else(uf == "AP") {
  nomeCompleto = "Amapá";
}
*/
//Saída
var saida = "Nome completo do estado: " + nomeCompleto;
console.log(saida);