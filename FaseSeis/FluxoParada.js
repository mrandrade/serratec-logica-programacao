//Break
//Não é boa prática modificar a variável de controle.
for (var i = 0; i < 10; i++){
    console.log("o valor de i " + i);
    if (i == 5) {
        //i = 10; //Deve-se usar o break no luga de uma variável superior aquela de controle p/ interromper o loop.
        break;
    }
}
console.log("fora do laço");
//Continue
for (var i = 0; i < 10; i++){
    if (i == 5) {
        console.log("cheguei na metade");
        continue;// Após entrar no if, o continue retorna ao loop.
    }
    console.log("o valor de i " + i);
}