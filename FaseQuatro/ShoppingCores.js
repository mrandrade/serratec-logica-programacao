/* 
O shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade.
antes de entrar, a pessoa deve reponder se o indicador está verde ou vermelho.
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.
*/

//const prompt = require("prompt-sync")();

//Entradas
var cor = "vermelho"//prompt("O indicador está verde ou vermelho? ");
//Processamento
var texto = "";

if (cor == "vermelho")
    text = "Completamente ocupado";
else
    if (cor == "amarelo")
        texto = "Atenção à capacidade"
    else
        if (cor == "laranja")
            texto = "Feminino ocupado, masculino livre";
        else
            texto = "Sanitário liberado";
    
console.log(texto);