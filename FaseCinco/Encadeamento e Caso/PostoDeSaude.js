/*
O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje.
*/

const prompt = require("prompt-sync")();
const limiteVacinar = 67;

var idade = prompt("Informe sua idade:       ");
var idadeInt = parseInt(idade);

if (idadeInt == limiteVacinar) {
    console.log("Legal. Hoje é o dia da sua vacina.");
}
else if (idadeInt > limiteVacinar) {
    console.log(`Visitas: ${qtdeVisitasInt}`)
    console.log("Poxa, o Sr(a) está atrasado. Mas poderá vacinar hoje.");
}
else if (idadeInt < limiteVacinar) {
    console.log("Opa, o Sr(a). não pode vacinar hoje. Sua idade é menor do que a idade definida no cronograma.");
}