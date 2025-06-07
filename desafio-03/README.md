# Atacando com Heroi

Este projeto é uma página HTML simples que permite ao usuário criar um herói, escolher seu tipo e ver a mensagem de ataque.

## Como usar

1. **Abrir o arquivo**  
   Abra o arquivo `index.html` no seu navegador (duplo‐clique ou arraste para uma janela do navegador).

2. **Preencher o formulário**  
   - No campo **Nome do Herói**, digite o nome que quiser.  
   - Em **Tipo de Herói**, escolha uma das opções:
     - Mago
     - Guerreiro
     - Ninja
     - Monge

3. **Submeter**  
   Clique no botão **Atacar!** para ver, logo abaixo, uma mensagem descrevendo o ataque do seu herói.

## Estrutura do código

- **Classe `Heroi`**  
  Definida em JavaScript, recebe `nome`, `idade` (neste exemplo, fixa em 20) e `tipo`.  
  O método `atacar()` retorna uma string com o tipo, nome e tipo de ataque.

- **Formulário HTML**  
  - `<input>` para o nome.  
  - `<select>` para o tipo.  
  - `<button>` para submeter.

- **Manipulação de evento**  
  Um `eventListener` em `submit` do formulário previne o recarregamento da página, instancia um `Heroi` e exibe o resultado dentro da `<div id="resultado">`.

## Personalizações

- Você pode ajustar a `idade` passando um campo extra no formulário.
- Adicionar estilos CSS diferentes ou animações.
- Ampliar a classe `Heroi` com mais métodos (por exemplo, `defender()`, `usarHabilidade()` etc.).

Divirta‐se testando diferentes heróis e ataques! 🚀
