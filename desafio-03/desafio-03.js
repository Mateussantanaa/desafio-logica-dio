class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "Magia";
        break;
      case "guerreiro":
        ataque = "Espada";
        break;
      case "ninja":
        ataque = "Katana";
        break;
      case "monge":
        ataque = "Artes Marciais";
        break;
      default:
        ataque = "habilidade desconhecida";
    }
    return `O ${this.tipo} ${this.nome} atacou usando ${ataque}!`;
  }
}

const form = document.getElementById('heroiForm');
const res  = document.getElementById('resultado');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const nome  = document.getElementById('nome').value.trim();
  const idade = +document.getElementById('idade').value;
  const tipo  = document.getElementById('tipo').value;
  const heroi = new Heroi(nome, idade, tipo);
  res.textContent = heroi.atacar();
  
  // animação de entrada
  res.classList.remove('show');
  void res.offsetWidth;
  res.classList.add('show');
});