/*
Pimentinhas para a virada de ano:
a.	É possível fazer o mesmo programa sem a inversão do laço?
b.	E se ao invés de números, a contagem fosse exibida em texto?
*/

for (let i = 0; i < 10; i++) {
    console.log(i+1, "segundo(s)");    
}
console.log("Feliz Ano Novo!");



//listaContagem = ["Dez", "Nove", "Oito", "Sete", "Seis", "Cinco", "Quatro", "Três", "Dois", "Um"];
listaContagem = [];
listaContagem[0] = "Dez";
listaContagem[1] = "Nove";
listaContagem[2] = "Oito";
listaContagem[3] = "Sete";
listaContagem[4] = "Seis";
listaContagem[5] = "Cinco";
listaContagem[6] = "Quatro";
listaContagem[7] = "Três";
listaContagem[8] = "Dois";
listaContagem[9] = "Um";
listaContagem[10] = "Zero";

for (let i = 0; i < listaContagem.length; i++) {
    console.log(listaContagem[i], "segundo(s)");    
}
console.log("Feliz Ano Novo!");