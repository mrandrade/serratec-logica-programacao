/*
# Serratec - Parque Tecnológico Região Serrana
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Autor (Proposta): Marcos Moraes
 * Squad de Origem (Proposta): Time NSMN (Squad 6)
 * Arquivo: barraquinhaZepa.js
 * Data: 22/08/2021
## Descrição:
Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. 
Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre tudo que ele vende. 
Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou café, ele confessa seus vícios e pede desculpa pois devorou o estoque. 
E se o cliente pedir algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido.
Dica: Use paçoca como "pacoca" e café como "cafe".
*/
const prompt = require("prompt-sync")();
//Entrada
var listaProdutos = [];
listaProdutos[0] = "CHOCOLATE";//1
listaProdutos[1] = "CAFE";//2
listaProdutos[2] = "CHICLETE";//3
listaProdutos[3] = "BALA";//4
listaProdutos[4] = "PACOCA";//5
//Processamento
do {
        console.log("+++++++++ Bem-Vindo(a) a Barraquinha do Zépa +++++++++");
        console.log("| 1. CHOCOLATE 2. CAFE 3. CHICLETE 4. BALA 5. PACOCA |");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        var resposta = prompt("Dentre as opções acima, digite o número do produto que você deseja:    "); //Saída
        var respInt = parseInt(resposta);        
        if (respInt > 0 && respInt <= 5) {
            if (respInt == 2 || respInt == 5) {
                console.log(`Desculpa, eu comi todo o estoque ${listaProdutos[respInt - 1]}. Cê deseja outro produto!`); //Saída
            }
            else {
                console.log("Você comprou", listaProdutos[respInt - 1]);
                console.log("Obrigado!");
            }
        }
        else {
            console.log("Desculpa, não tenho esse produto! Cê deseja algum outro produto?"); //Saída
        }
} while (respInt > 6);