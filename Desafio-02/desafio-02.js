
let resultado = calcularVit(1000, 5);
let niveis = definirRank();
let mensagem =`O Herói tem de saldo de ${resultado}  e está no nível ${niveis}`


function calcularVit(vitorias, derrotas) {
return vitorias - derrotas
}

function definirRank(niveis){
   niveis = [
  { max: 10,   label: "Ferro"      },
  { max: 20,   label: "Bronze"     },
  { max: 50,   label: "Prata"      },
  { max: 80,   label: "Ouro"       },
  { max: 90,   label: "Diamante"   },
  { max: 100,  label: "Lendário" },
]
for (let i = 0; i < niveis.length; i++) {
    if (resultado <= niveis[i].max) {
      return niveis[i].label;
    }
  }
  return "Imortal";
}

console.log(mensagem); 