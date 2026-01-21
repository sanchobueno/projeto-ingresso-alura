# Projeto eTicket - Simulação de Venda de Ingressos 🎟️

Este projeto foi desenvolvido durante o curso de **Lógica de Programação** da Alura. O objetivo é simular um sistema simples de compra de ingressos para um evento, aplicando conceitos fundamentais de JavaScript como manipulação do DOM, funções e estruturas condicionais.

## 📋 Funcionalidades

- **Seleção de Setor:** O usuário pode escolher entre três tipos de ingressos:
  - Pista
  - Cadeira Superior
  - Cadeira Inferior
- **Validação de Estoque:** O sistema verifica automaticamente se a quantidade desejada está disponível no setor selecionado.
- **Validação de Dados:** Impede a compra de números negativos ou inválidos.
- **Atualização em Tempo Real:** Após uma compra bem-sucedida, o número de ingressos disponíveis é atualizado na interface.

## 💻 Estrutura do Código

A lógica principal encontra-se no arquivo `js/app.js`:

- A função `comprar()` é responsável por capturar os dados do formulário.
- Utiliza `document.getElementById()` para ler e atualizar os valores na tela.
- Possui condicionais (`if/else`) para tratar cada tipo de ingresso e verificar a disponibilidade.

## 🚀 Como executar

1. Baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em qualquer navegador web.
3. Teste a compra de diferentes tipos de ingressos e quantidades.