/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Arquivo: signos.js
● Data: 22/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade.
*/

const prompt = require("prompt-sync")();

var nome = prompt("Qual é o seu nome? ");
var mesNasc = prompt("Qual é o seu mês de nascimento? ");
var diaNasc = prompt("Qual é o seu dia de nascimento? ");

var mesNascInt = parseInt(mesNasc);
var diaNascInt = parseInt(diaNasc);

const signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];


const frasesDeEfeito = [
    "Busque ser sociável, mas não abra mão de seus princípios. Equilíbrio na comunicação.",
    "Lembre-se de se dedicar ao lar e a si mesmo em proporções equilibradas.",
    "Necessidade de reconhecer a si mesmo e achar um equilíbrio eu-outro saudável.",
    "Se permita segurança em si mesmo para otimizar as relações.",
    "Aprenda hoje a escutar o que sua sensibilidade diz antes de se jogar em compromissos materiais vazios.",
    "Discussões em torno de fé, política e princípios carecem de uma justa medida entre assertividade e diplomacia.",
]

var numAletorio = geraValor();
function geraValor() {
    return Math.round(Math.random() * 5);
}
var frasesAletorio = frases();

function frases() {
    for (let i = 0; i < frasesDeEfeito.length; i++) {
        if (numAletorio == i) {
           return frasesDeEfeito[i];
       }    
   }   
}


// Áries
if ((diaNascInt >= 21 && mesNascInt == 3) || (diaNascInt <= 20 && mesNascInt == 4))
    console.log(`${signos[0]}: ${frasesAletorio}`);
else
// Touro
if ((diaNascInt >= 21 && mesNascInt == 4) || (diaNascInt <= 20 && mesNascInt == 5))
    console.log(`${signos[1]}: ${frasesAletorio}`);
else
// Gêmeos
if ((diaNascInt >= 21 && mesNascInt == 5) || (diaNascInt <= 20 && mesNascInt == 6))
    console.log(`${signos[2]}: ${frasesAletorio}`);
else
// Câncer
if ((diaNascInt >= 21 && mesNascInt == 6) || (diaNascInt <= 22 && mesNascInt == 7))
    console.log(`${signos[3]}: ${frasesAletorio}`);
else
// Leão	
if ((diaNascInt >= 23 && mesNascInt == 7) || (diaNascInt <= 22 && mesNascInt == 8))
    console.log(`${signos[4]}: ${frasesAletorio}`);
else
// Virgem
if ((diaNascInt >= 23 && mesNascInt == 8) || (diaNascInt <= 22 && mesNascInt == 9))
    console.log(`${signos[5]}: ${frasesAletorio}`);
else
// Libra
if ((diaNascInt >= 23 && mesNascInt == 9) || (diaNascInt <= 22 && mesNascInt == 10))
    console.log(`${signos[6]}: ${frasesAletorio}`);
else
// Escorpião	
if ((diaNascInt >= 23 && mesNascInt == 10) || (diaNascInt <= 21 && mesNascInt == 11))
    console.log(`${signos[7]}: ${frasesAletorio}`);
else
// Sagitário
if ((diaNascInt >= 22 && mesNascInt == 11) || (diaNascInt <= 21 && mesNascInt == 12))
    console.log(`${signos[8]}: ${frasesAletorio}`);
else
// Capricórnio
if ((diaNascInt >= 22 && mesNascInt == 12) || (diaNascInt <= 19 && mesNascInt == 1))
    console.log(`${signos[9]}: ${frasesAletorio}`);
else
// Aquário
if ((diaNascInt >= 20 && mesNascInt == 1) || (diaNascInt <= 18 && mesNascInt == 2))
    console.log(`${signos[10]}: ${frasesAletorio}`);
else
// Peixes
if ((diaNascInt >= 19 && mesNascInt == 2) || (diaNascInt <= 20 && mesNascInt == 3))
    console.log(`${signos[11]}: ${frasesAletorio}`);