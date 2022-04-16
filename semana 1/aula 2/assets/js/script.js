const teste = document.getElementById("primeiro")
teste.innerText = "Olá Mundo" //altera o texto do elemento do html com o id primeiro que foi colocado na variável teste

const teste_classe = document.getElementsByClassName("boxes") //retorna um array com todos os elementos que possuem a classe boxes
teste_classe[0].innerText = "é isso" //altera o texto do primeiro elemento do array

//->

const teste_query = document.querySelector("#primeiro") //retorna o primeiro elemento que possui o id primeiro
teste_query.innerText = "ola mundo 2" //altera o texto do primeiro elemento que possui o id primeiro

const teste_query_all = document.querySelectorAll(".boxes") //retorna um array com todos os elementos que possuem a classe boxes
teste_query_all[0].innerText = "é isso 2" //altera o texto do primeiro elemento do array

teste_query_all[1].addEventListener('click', () => {
    console.log("clicou")
})

teste_query_all[2].addEventListener('mouseover', () => {
    console.log("passou o mouse")
    teste_query_all[2].innerText = "passou o mouse"
})

teste_query_all[0].addEventListener('mouseout', () => {
    teste_query_all[0].style.backgroundColor = "red"
    teste_query_all[0].innerText = "tirou o mouse"
})

teste_query_all[3].addEventListener('dblclick', () => {
    teste_query_all[3].style.backgroundColor = "green"
    teste_query_all[3].innerText = "clicou duas vezes"
})

teste_query_all[3].addEventListener('click', () => {
    //numero aleatorio entre 1 e 5
    let numero = Math.floor(Math.random() * 5) + 1

    if (numero == 1) {
        teste_query_all[3].style.backgroundColor = "red"
    } else if (numero == 2) {
        teste_query_all[3].style.backgroundColor = "blue"
    }else if (numero == 3) {
        teste_query_all[3].style.backgroundColor = "green"
    }else if (numero == 4) {
        teste_query_all[3].style.backgroundColor = "yellow"
    }else if (numero == 5) {
        teste_query_all[3].style.backgroundColor = "orange"
    }
})

//so que no caso tem que trazer a informação que quer alterar como uma variavel

const img = document.querySelector("img")

function handleChange() {
    let numero = Math.floor(Math.random() * 5) + 1

    if (numero == 1) {
        teste_query_all[3].style.backgroundColor = "red"
        img.setAttribute("src", "./assets/img/vel.jpg")
    } else if (numero == 2) {
        teste_query_all[3].style.backgroundColor = "blue"
    }else if (numero == 3) {
        teste_query_all[3].style.backgroundColor = "green"
    }else if (numero == 4) {
        teste_query_all[3].style.backgroundColor = "yellow"
    }else if (numero == 5) {
        teste_query_all[3].style.backgroundColor = "orange"
        img.setAttribute("src", "./assets/img/sera.png")
    }
}