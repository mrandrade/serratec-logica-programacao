/*
O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar (e, ou), e depois imprime na tela a tabela verdade montada em um laço.
*/

console.log("Tabela Verdade do E")
console.log("---------------------")
for (let i = 0; i < 4; i++) {
    if (i == 0 || i == 1) {
        var p = true;
    }
    else {
        p = false;
    }
    var q = (i == 0 || i == 2);
    var r = p && q;
    console.log( p,"|", q,"|",r)    
}

/*
console.log("Tabela Verdade do E")
console.log("---------------------")
for (let i = 0; i < 4; i++) {
    var p = true;
    var q = true;
    var r = p && q;
    console.log( p,"|", q,"|",r)    
}

console.log("Tabela Verdade do OU")
console.log("---------------------")
for (let i = 0; i < 4; i++) {
    var p = true;
    var q = false;
    var r = p || q;
    console.log( p,"|", q,"|",r)    
}
*/