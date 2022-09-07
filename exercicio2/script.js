let idade = prompt("Qual é sua idade?")
let ensinoMedio = confirm("Você terminou o ensino médio?")
let cursandoFaculdade = confirm("Você está cursando alguma faculdade?")


if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Barrado no baile")
}

if (ensinoMedio) {
    console.log("Parabéns")
} else {
    console.log("Tente outra vez")
}

if (!cursandoFaculdade) {
    console.log("Vai estudar!")
} else {
    console.log("Muito bem")
}