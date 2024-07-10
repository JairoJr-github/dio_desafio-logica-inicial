// Instruções para entrega
//# 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada


class heroes{
    constructor(name, age, type, arma){ 
        this.name = name
        this.age = age
        this.type = type
        this.arma = arma
    }
    atack(){
        if (this.type === "guerreiro"){
            console.log(`O ${this.type} atacou usando ${this.arma}`)
        }
        else if (this.type === "mago"){
            console.log(`O ${this.type} atacou usando ${this.arma}`)
        }
        else if (this.type === "monge"){
            console.log(`O ${this.type} atacou usando ${this.arma}`)
        }
        else if (this.type === "ninja"){
            console.log(`O ${this.type} atacou usando ${this.arma}`)
        }
        else{
            console.log(this.type)
        }
    }
}

let heroesOne = new heroes("Jairo", 30, "guerreiro", "espada")
let heroesTwo = new heroes("Godzilla", 30, "mago", "magia")
let heroesThree = new heroes("KingKong", 30, "monge", "artes mongisticas marciais")
let heroesFour = new heroes("Chapolin", 30, "ninja", "shuriken")
heroesOne.atack()
heroesTwo.atack()
heroesThree.atack()
heroesFour.atack()
