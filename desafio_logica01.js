// Desafio Classificador de nível de Herói

// Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
//depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo{
//##############################################
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata 
// Se XP for entre 5.001 e 6.000 = Ouro
// Se XP for entre 6.001 e 7.000 = Platina 
// Se XP for entre 7.001 e 8.000 = Diamante
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual 10.001 = Radiante
//###############################################
// Saída
// Ao final deve se exibir uma mensagem{
// "O Herói de nome **{no** está no nível de **{niv**"

let nomeHeroi = "Godzilla"
let nivelDoHeroi = 9358
//let i = 1
const consoleNome = "O Herói de nome: "
const consoleNivel = " está no nível de Nível: "



while (nivelDoHeroi){
    if (nivelDoHeroi <= 1000){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Anemia - Ferro");
        break;
    }
    else if ((nivelDoHeroi >= 1001) && (nivelDoHeroi < 2000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Nem sai de casa - Bronze");
        break;
    }
    else if ((nivelDoHeroi >= 2001) && (nivelDoHeroi < 5000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Tomou mucilon - Prata");
        break;
    }
    else if ((nivelDoHeroi >= 5001) && (nivelDoHeroi < 6000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Ta quase virando homenzinho - Ouro");
        break;
    }
    else if ((nivelDoHeroi >= 6001) && (nivelDoHeroi < 7000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Não é o cabelo, mas ta - Platinado");
        break;
    }
    else if ((nivelDoHeroi >= 7001) && (nivelDoHeroi < 8000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Não é o cabelo, mas ta - Platinado");
        break;
    }
    else if ((nivelDoHeroi >= 8001) && (nivelDoHeroi < 9000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Ta amostradinho - Ascendente");
        break;
    }
    else if ((nivelDoHeroi >= 9001) && (nivelDoHeroi < 10000)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Não é o Grêmio mas também é - Imortal");
        break;
    }
    else if ((nivelDoHeroi >= 10001)){
        console.log(consoleNome + nomeHeroi + consoleNivel, + nivelDoHeroi + " Contemplem o pica das galaxias - Radiante");
        break;
    }
    else{
        console.log("deu ruim na bagaça")
    }
}
