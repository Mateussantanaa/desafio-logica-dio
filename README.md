# Desafio de Lógica da Dio

# Classificador de Nível do Herói 🛡️

Este é um pequeno projeto em JavaScript que classifica o nível de um herói com base em sua pontuação (XP). A pontuação é comparada com faixas predefinidas, e o programa informa em qual nível o herói se encontra.

## 💡 Como funciona

O programa define:
- Um nome de herói
- A quantidade de pontos (XP)
- Uma lista de níveis, cada um com uma faixa de pontuação

Usando um loop `for`, ele percorre essa lista e identifica o nível correto baseado na pontuação do herói.

## 📊 Faixas de Níveis

| Pontos (XP)         | Nível        |
|---------------------|--------------|
| 0 - 999             | Ferro        |
| 1000 - 2000         | Bronze       |
| 2001 - 5000         | Prata        |
| 5001 - 7000         | Ouro         |
| 7001 - 8000         | Platina      |
| 8001 - 9000         | Ascendente   |
| 9001 - 10000        | Imortal      |
| Acima de 10000      | Radiante     |

## 🧪 Exemplo de uso

```javascript
const heroiName = "Mateus Santana";
let xPoints = 10000;
// Resultado esperado: Imortal