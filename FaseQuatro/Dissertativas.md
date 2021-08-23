# 1.	Qual a diferença entre operadores unários e binários?

    Enquanto as op. unários se caracterizam por ter um único operando,já as op. binários se caracterizam por ter dois operandos.

# 2.	O que é a tabela verdade?

    É uma ferramenta para se descobrir os valores de verdade de expressões.

# 3.	Escreva a tabela verdade de cada operador lógico.
/*
P        Q           &&
--------+-----------+----
true    |true       |true
true    |false      |false
false   |true       |false
false   |false      |false
*/

/*
P        Q           ||
--------+-----------+----
true    |true       |true
true    |false      |true
false   |true       |true
false   |false      |false
*/

/*
P        NOT          
--------+--------
true    |false      
false   |true      
*/
# 4.	Quais os operadores aritméticos equivalentes aos lógicos?

    OU -> Equivale a soma (+), E -> Equivale a multiplicação (*), NOT  -> Equivale a menos (-).

# 5.	Das palavras abaixo, informe os sinônimos dos operadores “e” e “ou”:
    __a.	Ambos__ => "e"
    __b.	Qualquer__ => "ou"
    c.	Tanto quanto
    d.	Apenas
# 6.	O que é um curto circuito?

    Colapso imprevisto no funcionamento de algo.

# 7.	A negação do sinal de maior é apenas mudá-lo para menor? Justifique.

    Não. É presio inverter o sinal e acrescentar o igual.

# 8.	Escreva a negação das sentenças abaixo, usando a forma negativa e a forma de substituição de operadores. Troque and e or quando aparecerem.
    a.	(Nome == ‘Artur’) and (Idade != 23) 
    --- (Nome != ‘Artur’) and (Idade == 23)
    b.	(Inicio < 5) or (Inicio > 10) 
    --- (Inicio >= 5) or (Inicio <= 10)
    c.	(EstadoCivil == ‘S’) and (Idade > 18) or ((Letra >= ‘A’) and (Letra <= ‘E’)) 
    --- (EstadoCivil != ‘S’) or ! (Idade <= 18) and ! ((Letra < ‘A’) or ! (Letra > ‘E’))
    d.	! (aluno1 == ‘feliz’ or aluno2 == ‘feliz’)
    --- (aluno1 != ‘feliz’ and ! aluno2 != ‘feliz’)
# 9.	A negação da proposição “Todo professor de matemática usa óculos” é:
    a.	Nenhum professor de matemática usa óculos.
    b.	Ninguém que usa óculos é professor de matemática.
    c.	Todos os professores de Matemática não usam óculos.
    d.	Existe alguém que usa óculos e não é professor de matemática.
    __e.	Existe algum professor de matemática que não usa óculos.__
# 10.	Escreva a negação das expressões abaixo, aplicando antônimos nos substantivos ou adjetivos.
    a.	Somos uma turma comunista, portanto o professor é o nosso supremo marechal e nos manda o que fazer.
        
        - Sou uma pessoa capitalista, portanto o aluno é o nosso diminuto soldado e nos manda o que fazer.

    b.	O jovem passeava tranquilamente pelo parque carregando seu violino para a suave sinfonia.

        - O velho passeava consternadamente pelo parque carregando seu violino para a irritada sinfonia.

    c.	Antes de escovar os dentes sempre usava o fio dental, mesmo assim ficaram amarelados.

        - Antes de escovar os dentes sempre usava o fio dental, mesmo assim ficaram brancos.

# 11.	Com base no conceito da negação, escreva o masculino ou o feminino dos nomes.
    a.	Flávia => Flávio
    b.	André => Andréia
    c.	Júlio => Júlia
    d.	Sandra => Sandro
    e.	Carlos => Carla
    f.	Maria => Mario
    g.	Felipe => Felipa
    h.	Beatriz => Bertaso