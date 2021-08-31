/*
Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Componentes: Carolina Tardin, Carlos Alberto Rodrigues, Diego Faria, Gilnei Lima, Leandro Fita, Marcella Alzuguir
Autor da proposta: Leandro Fita
Data: 21/08/2021

Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
•    R$ 1,99
•    R$ 3,50
•    R$3,99
•    R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$5,00
•    R$10,00
•    R$20,00
*/
const prompt = require("prompt-sync")();
//Entrada
var listaCedulas = [];
listaCedulas[0] = 2.00;//1
listaCedulas[1] = 5.00;//2
listaCedulas[2] = 10.00;//3
listaCedulas[3] = 20.00;//4

var listaPrecos = [];
listaPrecos[0] = 6.00;//1
listaPrecos[1] = 3.50;//2
listaPrecos[2] = 1.99;//3
listaPrecos[3] = 3.99;//4
listaPrecos[4] = 1.50;//5

var listaProdutos = [];
listaProdutos[0] = "COCA-COLA";//1
listaProdutos[1] = "PEPSI";//2
listaProdutos[2] = "TOBI";//3
listaProdutos[3] = "GUARANA ANTARTICA";//4
listaProdutos[4] = "CONVENCAO";//5
//Processamento
do {
    //for (var i = 0; i < listaProdutos.length; i++) {
        console.log("++++++++++++++ Máquina do Refrigerante Gelado +++++++++++++++++");
        console.log("| 1. Coca-Cola - R$ 6.00  2. Pepsi - R$ 3.50 3. Tobi - R$ 1.99|");
        console.log("|    4. Guaraná Antártica - R$ 3.99 5. Convenção - R$ 1.50    | ");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    var produto = prompt("Dentre as opções acima, digite o número do produto que você deseja:    "); //Saída
        var produtoInt = parseInt(produto);
        console.log("++++++ Valores +++++++++++++");
        console.log("| 1.  2.00      2. 5.00    |");
        console.log("| 3.  10.00     4. 20.00   | ");
        console.log("++++++++++++++++++++++++++++");
    var cedulas = prompt("Dentre as opções acima, digite a cédula que você deseja:    "); //Saída
    var cedulasInt = parseInt(cedulas);
    let trocoDaCompra = listaCedulas[cedulasInt - 1] - listaPrecos[produtoInt - 1];;

        if (produtoInt > 0 && produtoInt <= 5) {
            if (trocoDaCompra > 0) {
                console.log("Nome Do Produto: ", listaProdutos[produtoInt - 1]);
                console.log("Valor Do Produto: R$", listaPrecos[produtoInt - 1]);
                console.log("Valor Do Troco: R$", trocoDaCompra.toFixed(2));
            }
            else {
                console.log("Atenção, o valor da cédula escolhida é inferior ao o valor do produto!");
            }
        }
        else {
            console.log("Dígito Inválido! Por favor, escolha novamente."); //Saída
        }
    //}
} while (produtoInt > 6);