//ListaAlunos
var alunos = [];
var presenca = [];
alunos[0] = "Adrian";
presenca[0] = true;
alunos[1] = "Andre Luis";
presenca[1] = true;
alunos[2] = "Andre Silva";
presenca[2] = true;
alunos[3] = "Antonio";
presenca[3] = true;
alunos[4] = "Arthur";
presenca[4] = true;
alunos[5] = "Beatriz";
presenca[5] = true;
alunos[5] = "Beatriz";
presenca[5] = true;
alunos[6] = "Bruno";
presenca[6] = true;
alunos[7] = "Carlos";
presenca[7] = false;

var qtdeAlunos = alunos.length;
console.log("A quatidade alunos: " + qtdeAlunos);

var nome = "Raquel";
var posicaoNome = -1;

//A quantidade de alunos - Agregação
for (var i = 0; i < qtdeAlunos; i++){
    //criterio
    if (alunos[i] == nome) {
        posicaoNome = i;
        break;
    }
}

if (posicaoNome == - 1) {
    console.log("Não encontrei o aluno "+nome+" na listagem")
} else {
    console.log("O aluno " + nome + " está na cadeira " + posicaoNome+".");
}

//O total de alunos - Agregação
var total = 0;
for (var i = 0; i < presenca.length; i++){
    //criterio
    if (presenca[i]) {
        total++;
        break;
    }
}
console.log("O total de presentes é", total);

console.log(qtdeAlunos);

//O número de ausentes - Analítico
for (var i = 0; i < presenca.length; i++){
    if (!presenca[i]) {
        console.log("O nome do aluno é", alunos[i]);
    }
}

var ausentes = [];
// saber se está ausente
for (let i = 0; i < alunos.length; i++) {
    const ausente = ! presenca[i];
    //critério de busca
    if (ausente) {
        var nome = alunos[i];
        ausentes.push(nome);
    }
}

console.log("Os nomes dos ausentes são: ");
console.log(ausentes);