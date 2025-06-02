const heroiName = "Mateus Santana";
let xPoints = 1000;
const notificacao = "O heroi " + heroiName + " tem " + xPoints + " pontos e esta no nivel "

const niveis = [
  { max: 1000,   label: "Ferro"      },
  { max: 2000,   label: "Bronze"     },
  { max: 5000,   label: "Prata"      },
  { max: 7000,   label: "Ouro"       },
  { max: 8000,   label: "Platina"    },
  { max: 9000,   label: "Ascendente" },
  { max: 10000,  label: "Imortal"    }
];

let nivel = "Radiante";

for (let i = 0; i < niveis.length; i++) {
  if (xPoints <= niveis[i].max) {
    nivel = niveis[i].label;
    break;
  }
}

console.log(notificacao + nivel);