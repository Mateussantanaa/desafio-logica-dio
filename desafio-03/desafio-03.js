class Heroi {
  constructor(name, idade, tipo) {
    this.name = name;
    this.idade = idade;
    this.tipo = tipo;
  }
}

atacar(); {
  let ataque
  switch (this.tipo) {
    case "mago":
      ataque = "Magia";
      break;
    case "Guerreiro":
      ataque = "Espada";
      break;
    case "Ninja":
      ataque = "Katana";
      break;
    case "Monge":
      ataque = "Artes Maciais";
      break;
    default:
      ataque = 'habilidade desconhecida';
  }
}

console.log(`o ${this.tipo} atacou usando ${ataque}`);

const heroi1 = new Heroi('Mateus', 20, 'Guerreiro');
heroi1.atacar();