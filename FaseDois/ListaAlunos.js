var listaAlunos = [
     "Adrian",
     "Andre Luiz",
     "Andre",
     "Beatriz",
     "Bruno",
     "Carolina",
     "Daniel",
     "Diego",
     "Eduardo",
     "Gilnei",
     "Guilherme",
     "Gustavo",
     "Gustavo",
     "Higor",
     "Karina",
     "Leandro",
     "Luana",
     "Luciana Evangelista",
     "Luciana Moreira",
     "Marcella",
     "Marcos Antonio",
     "Marcos Vinicius",
     "Maria",
     "Matheus",
     "Nathan",
     "Núria",
     "Pedro Henrique",
     "Pedro",
     "Rafael",
     "Raquel",
     "Rodrigo",
     "Rodrigo",
     "Vanderson",
     "Victor",
     "Viviane"];

for (i = 0; i < listaAlunos.length; i++) {
     console.log(listaAlunos[i])
}

listaAlunos.forEach(function (nome, i) {
     console.log(nome, i);
})