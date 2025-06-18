// Estado de Vida do Pokémon na Batalha
// Perguntar ao usuário quantos pontos de vida (HP) o Pokémon adversário ainda tem (um número entre 0 e 100).
// Com base no valor informado, exiba:
// Se o HP for maior que 70: "O Pokémon adversário ainda está forte!"
// Se o HP for entre 31 e 70: "O Pokémon adversário está enfraquecendo. Continue assim!"
// Se o HP for entre 1 e 30: "O Pokémon adversário está quase desmaiando!"
// Se o HP for 0 ou menos:"O Pokémon adversário desmaiou!"

const prompt = require('prompt-sync')();

let pontosVida = parseInt(prompt("Quantos pontos de vida o Pokemon adversário tem? "))
const mensagemFinal = ("Seja uma Mestra Pokemon!")

if (isNaN(pontosVida)) {
    console.log("Valor inválido! Por favor, digite um número inteiro.")
}else{
    if(pontosVida > 70) {
        console.log("O Pokémon adversário ainda está forte!")
    }else if(pontosVida >= 31 && pontosVida <= 70){
        console.log("O Pokémon adversário está enfraquecendo. Continue assim!")
    }else if(pontosVida >= 1 && pontosVida <= 30) {
        console.log("O Pokémon adversário está quase desmaiando!")
    }else{
        console.log("O Pokémon adversário desmaiou! Fim da batalha!")
    }
    console.log("===========================")
    console.log(mensagemFinal)
}
