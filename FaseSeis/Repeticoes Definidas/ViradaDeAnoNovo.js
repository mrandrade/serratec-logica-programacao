/*
Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”.
*/
var contagem = 10;
for (let i = 0; i < 10; i++) {
    console.log(contagem -= 1, "segundo(s)");
}
console.log("Feliz Ano Novo!");


/*
var inicio = 11;
while (inicio > 0) {
    inicio--; // inicio -= 1;
    console.log(inicio, "segundo(s)");
}
console.log("Feliz Ano Novo!");
*/