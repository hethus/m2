const teste = document.getElementById("primeiro")
teste.innerText = "Olá Mundo" //altera o texto do elemento do html com o id primeiro que foi colocado na variável teste

const teste_classe = document.getElementsByClassName("boxes") //retorna um array com todos os elementos que possuem a classe boxes
teste_classe[0].innerText = "é isso" //altera o texto do primeiro elemento do array

//->

const teste_query = document.querySelector("#primeiro") //retorna o primeiro elemento que possui o id primeiro
teste_query.innerText = "ola mundo 2" //altera o texto do primeiro elemento que possui o id primeiro

const teste_query_all = document.querySelectorAll(".boxes") //retorna um array com todos os elementos que possuem a classe boxes
teste_query_all[0].innerText = "é isso 2" //altera o texto do primeiro elemento do array