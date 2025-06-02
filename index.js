let heroiName = "Mateus Santana"
let xPoints = 10000
let nivel = " "
const notificacao = "O heroi " + heroiName + " tem " + xPoints + " pontos e esta no nivel "

if (xPoints < 1000) {
    nivel ="Ferro"
}

else if (xPoints >= 1000 && xPoints <= 2000) {
   nivel = nivel = "Bronze"
}
else if (xPoints >= 2001 && xPoints <= 5000) {
   nivel = "Prata"
}

else if (xPoints >= 5001 && xPoints <= 7000) {
   nivel = "Ouro"
}

else if (xPoints >= 7001 && xPoints <= 8000) {
   nivel = "Platina"
}

else if (xPoints >= 7001 && xPoints <= 8000) {
   nivel = "Platina"
}

else if (xPoints >= 8001 && xPoints <= 9000) {
   nivel = "Acesdente"
}

else if (xPoints >= 8001 && xPoints <= 9000) {
   nivel = "Ascendente"
}

else if (xPoints >= 9001 && xPoints <= 10000) {
   nivel = "Imortal"
}

else if (xPoints >= 10001) {
   nivel = "Radiante"
}

console.log(notificacao + nivel)