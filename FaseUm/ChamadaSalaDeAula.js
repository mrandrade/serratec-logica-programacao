var listaAlunos = ["Adrian Menezes Da Silva","Andre Luiz Curio Cintra", "Andre Ponte Da Silva","Angelita Arruda Sobrinho Zimbrão","Beatriz Neves Nolasco","Bruno Oliveira De Paula Salerno Ribeiro","Carlos Alberto Rodrigues","Carolina Tardin", "Daniel Cesar da Costa","Diego Dias Faria Da Silva","Eduardo Pina Brigatti","Gilnei Lima Dos Santos","Guilherme Ferrreira Gusman","Gustavo Jardim De Barros", "Gustavo Ponte Barbosa", "Higor Henrique Dos Santos Nascimento","Karina Leal Da Silva","Leandro Fita","Luana Aquino Da Silva","Luciana Evangelista Dos Santos","Luciana Gasparini Moreira Wendling","Marcella Alzuguir","Marcos Antonio De Moraes Junior","Marcos Vinicius","Matheus Rodrigues Andrade","Nathan Guimarães","Núria Peçanha Barbosa","Pedro Henrique Pinto Ricardo", "Pedro Henrique Quaresma Coelho","Rafael Alves","Raquel Nascimento Machado","Rodrigo Calmon Nogueira Da Gama Marques Fontes","Rodrigo De Paula Ribeiro","Samuel Miranda Ferreira","Vanderson Pereira Da Silva","Victor Hugo de Oliveira Martins","Viviane Dantas Soares"];

for (i = 0; i < listaAlunos.length; i++) {
     console.log(listaAlunos[i])
}

listaAlunos.forEach(function (nome, i) {
     console.log(nome, i);
})