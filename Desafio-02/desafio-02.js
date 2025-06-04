document.getElementById("heroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeHeroi = document.getElementById("inputHero").value;
  const vitorias  = parseInt(document.getElementById("inputVit").value, 10);
  const derrotas  = parseInt(document.getElementById("inputDer").value, 10);

  const saldo = calcularVit(vitorias, derrotas);
  const nivel = definirRank(saldo);

  document.getElementById("heroName").textContent = nomeHeroi;
  document.getElementById("saldo").textContent   = saldo;
  document.getElementById("level").textContent   = nivel;
});

function calcularVit(vitorias, derrotas) {
  return vitorias - derrotas;
}

function definirRank(saldo) {
  const niveis = [
    { max: 10,   label: "Ferro"     },
    { max: 20,   label: "Bronze"    },
    { max: 50,   label: "Prata"     },
    { max: 80,   label: "Ouro"      },
    { max: 90,   label: "Diamante"  },
    { max: 100,  label: "Lendário"  },
  ];

  for (let i = 0; i < niveis.length; i++) {
    if (saldo <= niveis[i].max) {
      return niveis[i].label;
    }
  }
  return "Imortal";
}