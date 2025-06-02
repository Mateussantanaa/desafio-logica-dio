const niveis = [
  { max: 1000,   label: "Ferro"      },
  { max: 2000,   label: "Bronze"     },
  { max: 5000,   label: "Prata"      },
  { max: 7000,   label: "Ouro"       },
  { max: 8000,   label: "Platina"    },
  { max: 9000,   label: "Ascendente" },
  { max: 10000,  label: "Imortal"    }
];

function calcularNivel(xPoints) {
  for (let i = 0; i < niveis.length; i++) {
    if (xPoints <= niveis[i].max) {
      return niveis[i].label;
    }
  }
  return "Radiante";
}

const form = document.getElementById('heroForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const heroiName = document.getElementById('inputHero').value.trim();
  const xPoints = parseInt(document.getElementById('inputXP').value, 10);

  const nivel = calcularNivel(xPoints);

  document.getElementById('heroName').textContent = heroiName || '[Sem nome]';
  document.getElementById('xpPoints').textContent = isNaN(xPoints) ? '0' : xPoints;
  document.getElementById('level').textContent = nivel;
});