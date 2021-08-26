/---- Encadeamento ----/
# 1. O que é um se encadeado?

    Se inicia por um if inicial seguido da

# 2. Para um condicional com dois “se”s e um senão, a qual if o else está vinculado (interno ou externo)?

    Poderia estar vinculado tanto ao if interno quanto externo. É preciso verificar a indentação.

# 3. É possível inverter esse vínculo?

    Sim. Basta alterar a indentação.

/---- Seletor de escolha (caso) ----/

# 1. Qual a semelhança entre os seletores “se” e “escolha”?

    Tanto o if quanto o switch colocam condições para execução de um conjunto de instruções.

# 2. Com quais tipos de dados posso utilizar o switch? (JS e demais linguagens)

    Strings, integers.

# 3. É necessário o uso de blocos para conjuntos de instruções?

    Sim.

# 4. Porquê as instruções posteriores ao caso atendido também são executadas?

    Para verificar se há mais casos possíveis.

# 5. Qual a função do break?

    Interrompe não só a execução do laço ou switch, como também a execução do if no caso de chave única.

# 6. Como relacionar várias alternativas a um mesmo conjunto de instruções?

    Basta listar um case abaixo do outro, colocando a seguir a instrução com o break.

# 7. Como criar uma alternativa para “nenhuma das anteriores”?

    Utiliza-se o default.

# 8. Cite exemplos de quando usar e quando não usar um seletor caso.
    - Em listas de seleção.
    - Grupos de constantes.
    - Comparações de igualdade.
    - Quando mais de uma opção ‘mapeia’ para o mesmo valor.