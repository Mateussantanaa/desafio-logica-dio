🛡️ Classificador de Rank do Herói
"Nem todo herói usa capa... mas todo herói tem um rank!"

Este é um projeto web feito com HTML, CSS e JavaScript, que calcula o saldo de vitórias de um herói e o classifica em um rank baseado no seu desempenho em batalhas.

✨ Como Funciona
O usuário preenche:

🧙‍♂️ Nome do Herói

⚔️ Número de Vitórias

💀 Número de Derrotas

O sistema calcula o saldo: vitórias - derrotas

O saldo define o nível de habilidade do herói

O resultado é exibido com nome, saldo e rank na interface

🧾 Tabela de Ranks
🧮 Saldo de Vitórias	🏆 Rank
0 - 10	🪨 Ferro
11 - 20	🥉 Bronze
21 - 50	🥈 Prata
51 - 80	🥇 Ouro
81 - 90	💎 Diamante
91 - 100	🔥 Lendário
Acima de 100	🐉 Imortal

🧪 Exemplo de Uso
plaintext
Copiar
Editar
Nome: Lady Valkyria
Vitórias: 88
Derrotas: 12
javascript
Copiar
Editar
// Cálculo:
const saldo = 88 - 12; // 76

// Resultado:
Rank: "Ouro"
🧩 Arquitetura do Código
📜 JavaScript
calcularVit(vit, der): Calcula o saldo de vitórias

definirRank(saldo): Determina o rank com base em faixas

Evento submit: Processa os dados e atualiza a interface sem recarregar a página

🧱 HTML
Formulário com campos:

#inputHero (nome)

#inputVit (vitórias)

#inputDer (derrotas)

Resultados exibidos em:

#heroName, #saldo, #level

🎨 CSS
Interface estilizada com tema épico (já incluso no projeto)

🚀 Como Usar
Clone ou baixe o projeto

Abra o arquivo index.html no navegador

Preencha os campos e envie

Veja a classificação do seu herói em tempo real!

💡 Dica Extra
Você pode adaptar o sistema para outros tipos de jogos, como RPGs, MOBAs, ou até torneios escolares!