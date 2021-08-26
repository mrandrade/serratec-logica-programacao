/*
O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.
*/
const prompt = require("prompt-sync")();

var qtdeVisitas = prompt("Quantas vezes você realizou uma visita? ");
var qtdeVisitasInt = parseInt(qtdeVisitas);

if (qtdeVisitasInt == 1) {
    console.log(`Visitas: ${qtdeVisitasInt}`)
    console.log("Legal. É verdade, você já nos visitou uma vez.");
}
else if (qtdeVisitasInt == 2) {
    console.log(`Visitas: ${qtdeVisitasInt}`)
    console.log("Legal. É verdade, você já nos visitou uma vez.");
}
else if (qtdeVisitasInt > 0) {
    console.log(`Visitas: ${qtdeVisitasInt}`)
    console.log("Legal. É verdade, você já nos visitou várias vezes.");
}