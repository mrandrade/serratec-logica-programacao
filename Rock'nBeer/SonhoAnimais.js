/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Gustavo J. Barros
 * Título: Sonhado com animais
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021

## Descrição: 
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar. Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?

## Dicas:
• Crie uma função para gerar os números aleatórios.
• Diga sempre qual é o animal sorteado
• Diga se ele acertou ou não
• Dê uma nova chance até ele acertar.
*/
const prompt = require("prompt-sync")();
//Entrada
var listaAnimais = [];
listaAnimais[0] = "CACHORRO";
listaAnimais[1] = "JACARÉ";
listaAnimais[2] = "TIGRE";
listaAnimais[3] = "COBRA";
listaAnimais[4] = "ELEFANTE";
listaAnimais[5] = "GATO";
listaAnimais[6] = "MACACO";
listaAnimais[7] = "CAVALO";
listaAnimais[8] = "PORCO";
listaAnimais[9] = "CABRA";
//Processamento
do {
    console.log("+++++++++++++ Bem-Vindo ao Cassino do Bixo +++++++++++");
    console.log("|1. CACHORRO 2. JACARÉ 3. TIGRE 4. COBRA 5. ELEFANTE |");
    console.log("|  6. MACACO 7. CAVALO 8. PORCO 9. GATO 10. CABRA    |");
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    var resposta = prompt("Dentre as opções acima, digite o número do animal que mais se parece com o qual você sonhou? ");
    var respInt = parseInt(resposta);
    
    function geraValor() {
      return Math.trunc(Math.random() * 10);
    }

    var sorteioAnimal = listaAnimais[geraValor()];
    var escolhaAnimal = listaAnimais[respInt + 1];
    

    if (sorteioAnimal == escolhaAnimal) {
      console.log("** Parabéns, você acabou de ganhar no cassino do bixo!!! **"); //Saída
        console.log(`O animal sorteado foi o(a) ${escolhaAnimal}`);//Saída
            break;
    } else {
      console.log(`Tente novamente. O animal sorteado foi ${escolhaAnimal}`); //Saída
      resposta = prompt("Digite o nome de outro animal que mais se parece com o qual você sonhou? "); //Saída
    }

} while (escolhaAnimal != sorteioAnimal);
/*
do {
    valorIA = geraValor();
    if (valorIA == i) {
      if ((result = listaAnimais[i])) {
        if (result == respUpCase) {
          console.log("** Parabéns, você acabou de ganhar no cassino do bixo!!! **"); //Saída
            console.log(`O animal sorteado foi o(a) ${result}`);//Saída
                break;
        } else {
          console.log(`Tente novamente. O animal sorteado foi ${listaAnimais[i]}`); //Saída
          resposta = prompt("Digite o nome de outro animal que mais se parece com o qual você sonhou? "); //Saída
        }
      }
    }
} while (result != respUpCase);
*/

