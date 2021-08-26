/*
    Sapato da Nicolly
*/

var sapato = [];
sapato[0] = "Sandalia";
sapato[1] = "Mocacim";
sapato[2] = "Bota";
sapato[3] = "Chuteira";
sapato[4] = "Rasteirinha";
sapato[5] = "Sapatilha";
sapato[6] = "Tamanco";
sapato[7] = "Havaianas";
sapato[8] = "Kichute";
sapato[9] = "Tênis";

var pesquisa = "Sapatilha";
var encontrei = -1;

for (var i = 0; i < sapato.length; i++) {
  if (sapato[i] == pesquisa) {
    encontrei = i;
    listaEncontrados[qtdeEncontrados] = i;
    qtdeEncontrados++;
    //Break - se o valor é único não precisa continuar.
  }
  if (encontrei > -1) {
    console.log("Seu sapato está na gaveta", i);
  } else {
    console.log("Não encontrado");
  }
}
