/*
Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
*/
'use strict'
//Entrada
console.log("----- Calcule todas as tabuadas! -----")
//Processamento
for (var numero = 1; numero <= 10; numero++){
    console.log(`=== Tabuada de ${numero} ===\n`)
    for (var numero2 = 1; numero2 <= 10; numero2++){
        var calculo = numero * numero2;
            console.log(`${numero} x ${numero2} = ${calculo}\n`); //Saída
    }
}