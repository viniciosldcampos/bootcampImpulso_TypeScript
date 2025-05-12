# 🧪 Exercício 2 — Soma de Números com JavaScript e TypeScript  
Este repositório contém um pequeno projeto de exemplo com foco no uso de **JavaScript** e **TypeScript** para criar uma aplicação web simples que realiza a soma de dois números fornecidos pelo usuário via inputs HTML. O projeto ilustra a manipulação do DOM, uso de eventos e boas práticas com tipagem.  

## 📂 Arquivos Incluídos  
- Arquivo `index.html` — Página de marcação - HTML.  
- Arquivo `exemplo2.js` — Versão em JavaScript com tipagem TypeScript (gerado via compilação TypeScript).  
- Arquivo `exemplo2.ts` — Versão original em TypeScript.  

## 🧩 Funcionalidade      
A aplicação é composta por:  
- Dois campos de entrada (`input1` e `input2`)  
- Um botão (`button`) que aciona o cálculo  
- Uma função que soma os números e imprime no console com uma frase personalizada    

## 🧰 Tecnologias Utilizadas:  
- HTML5  
- JavaScript  
- TypeScript  

**✅ Principais Aprendizados**  
📌 Manipulação de DOM  
Os dois arquivos interagem com elementos HTML usando document.  getElementById() para capturar os inputs e o botão.  

🧠 Lógica da Soma  
A função adicionarNumero recebe dois números e imprime o resultado, com a verificação de uma variável booleana (devePrintar) para controlar se o console deve exibir o resultado.  

🛠️ Tipagem com TypeScript  
No arquivo .ts, há o uso de tipagem estática com as HTMLInputElement e definição explícita de tipos para variáveis e parâmetros de função, aumentando a segurança do código.  

## 📝 Considerações Técnicas  
- Usa manipulação básica de DOM com getElementById.  
- Faz casting de elementos com as HTMLInputElement para acessar .value com segurança.  
- Utiliza tipagem explícita em funções e variáveis (string, number, boolean).  
- Mostra a importância da verificação de existência dos elementos antes de manipulá-los.  