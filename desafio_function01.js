// Crie uma função que recebe como parametro a quantidade de vitorias e derrotas de um jogador,
// depois disso retorne o resultado para uma variavel, o saldo de Rankeadas deve ser feito atravpes do calculo (vitórias - derrotas)

// Se vitorias for menor do que 10 = ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Ao final deve se exibir uma mensagem:
// "O herói tem de saldo **{saldoVitorias}** está no nível de: **{nivel}**"

let saldoVitorias = 143
let saldoDerrotas = 35
let levelHero = calcLevel(saldoVitorias, saldoDerrotas)
//let statusHero = (`O Herói tem saldo de: {saldoVitorias}" + saldoVitorias + " e está no nível de " + statusRange(levelHero)`)
let statusHero = (`O Herói tem saldo de: ${saldoVitorias} Vitórias e está no nível de ${statusRange(levelHero)}`)

function calcLevel(saldoVitorias, saldoDerrotas){
    let nivel = saldoVitorias - saldoDerrotas
    return nivel
}

function statusRange(levelHero){
    let scale = " "
    if (levelHero <= 10){
        scale = "Rato Anêmico"
    }
    else if ((levelHero >= 11) && (levelHero <= 20)){
        scale = "Rato nutela"
    }
    else if ((levelHero >= 11) && (levelHero <= 20)){
        scale = "Rato nutela"
    }
    else if ((levelHero >= 21) && (levelHero <= 50)){
        scale = "Rato Frango"
    }
    else if ((levelHero >= 51) && (levelHero <= 80)){
        scale = "Rato de academia"
    }
    else if ((levelHero >= 81) && (levelHero <= 90)){
        scale = "Rato das paradinha"
    }
    else if ((levelHero >= 91) && (levelHero <= 100)){
        scale = "Rato dos Venenom"
    }
    else if (levelHero >= 101){
        scale = "Rato Godizilla"
    }
    return scale

}
console.log(statusHero)
