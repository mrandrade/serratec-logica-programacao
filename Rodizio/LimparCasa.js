/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves.
● Squad de Origem (Requisito): “Dsd” dragon slayer developers (Squad 5)
● Data: 23/08/2021
## Descrição:
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.
*/
const prompt = require("prompt-sync")();
console.log("** House Cleaning Service**")
console.log("1. Quarto");
console.log("2. Sala de estar");
console.log("3. Cozinha");
console.log("4. Banheiro");
resposta = prompt("Digite o número correspondente ao cômodo: ")
var estáLimpo = [];
var listaComodos = [];
listaComodos[0] = "QUARTO";
estáLimpo[0] = true;
listaComodos[1] = "SALA";
estáLimpo[1] = false;
listaComodos[2] = "COZINHA";
estáLimpo[2] = true;
listaComodos[3] = "BANHEIRO";
estáLimpo[3] = false;
var respInt = parseInt(resposta);

switch (respInt) {
    case 1:
        if (estáLimpo[0]) {
            console.log("O quarto está limpo!")
        } else {
            console.log("O quarto está sujo!")
        }
        break;
    case 2:
        if (estáLimpo[1]) {
            console.log("A sala está limpa!")
        } else {
            console.log("A sala está suja!")
        }
        break;
    case 3:
        if (estáLimpo[2]) {
            console.log("A cozinha está limpa!")
        } else {
            console.log("A cozinha está suja!")
        }
        break;
    case 4:
        if (estáLimpo[3]) {
            console.log("O banheiro está limpo!")
        } else {
            console.log("O banheiro está sujo!")
        }
        break;
    default:
        console.log("Digito Inválido. Por favor, retorne ao menu.");
        break;
    }