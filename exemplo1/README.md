**📘 Aplicação simples - Exercício 1**  
Este repositório contém um exemplo simples de aplicação web utilizando JavaScript e TypeScript. O foco é demonstrar a manipulação de elementos do DOM, tratamento de eventos e operações básicas com tipos numéricos.
  
**🚀 Funcionalidade**  
A aplicação permite ao usuário inserir dois números em campos de entrada e, ao clicar em um botão, realiza a soma desses dois valores. O resultado é impresso no console com uma frase personalizada.
  
**📂 Estrutura do Código**  
Elementos HTML manipulados:
input1: campo para o primeiro número.
input2: campo para o segundo número.
button: botão que aciona a soma.
  
**Função principal:**  
adicionarNumero(numero1, numero2, devePrintar, frase): Soma dois números e imprime o resultado no console se a flag devePrintar for verdadeira.
  
**🛠️ Tecnologias**  
HTML
JavaScript
TypeScript
  
**🧩 Versão em TypeScript**  
Além do arquivo app-exemplo1.js, o repositório também conta com uma versão equivalente escrita em TypeScript, disponível em app-exemplo1.```ts.
  
**✅ Melhorias com TypeScript**  
A principal vantagem da versão em TypeScript é o uso de tipagem estática, que ajuda a prevenir erros em tempo de desenvolvimento e torna o código mais seguro e fácil de entender.
  
**Principais diferenças em relação ao JS:**
Tipagem explícita para as variáveis e parâmetros:
```ts
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
```
  
**Tipagem na função:**
```ts
function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string)
```
  
**Tipagem de variável frase:**
```ts
let frase: string;
```
Essas alterações ajudam a garantir que input1 e input2 sejam reconhecidos como elementos do tipo HTMLInputElement, permitindo acesso seguro à propriedade .value.
  
**✅ Arquivo: validacao_basica com JavaScript**  
O repositório também conta com um arquivo adicional chamado validacao_basica.js, que apresenta uma outra abordagem mais direta para somar dois valores inseridos pelo usuário, com uma validação simples de tipo.
  
**🧠 Objetivo**  
Demonstrar uma verificação básica de tipos antes de realizar uma operação matemática, garantindo que mesmo que os dados venham como strings (que é o padrão dos inputs HTML), eles sejam convertidos corretamente para números.
  
**📚 Conclusão**  
Este repositório serve como base para aprender conceitos iniciais de:

**Manipulação de elementos DOM com JavaScript**
**Tipagem e segurança com TypeScript**
**Boas práticas de validação de dados de entrada**
  
É ideal para quem está começando com desenvolvimento web e deseja entender as diferenças entre JS puro, validações básicas e o uso de TypeScript.