/*
O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/

//Entrada
const limite = 8;
var qtde = 4; //7 e 8
//Processamento
var liberada = (qtde < limite);
var proximo = (qtde == 7);
//Encadeamento, aninhamento
if (liberada) {
    console.log('Entrada liberada'); //Saída
        
    if (proximo)
        console.log("Não deixe entrar se estiver acompanhado."); //Saída
}
else
    console.log("Aguarde um pouco"); //Saída