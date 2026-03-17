# Simulador de Caixa Eletrônico

Esse projeto é um **simulador de caixa eletrônico** desenvolvido em JavaScript. Ele permite que o usuário realize operações básicas de conta bancária, garantindo que limites de saque e saldo sejam respeitados para cada tipo de conta.

---

## Funcionalidades
- Cadastro do correntista (nome e tipo de conta)
- Seleção de operação:
  - Saque
  - Depósito
  - Consulta de saldo
- Limites de saque diário por tipo de conta:
  - Conta Corrente: R$ 3.000,00
  - Conta Poupança: R$ 1.500,00
  - Conta Salário: R$ 2.000,00
- Mensagens automáticas de acordo com a operação:
  - Saque negado (limite ou saldo insuficiente)
  - Saque realizado
  - Depósito realizado
  - Consulta de saldo
- Avaliação do saldo após a operação:
  - Saldo positivo
  - Saldo zerado/negativo
- Todos os valores monetários exibidos com duas casas decimais

---

## Tecnologias utilizadas
- JavaScript

---

## Como executar

1. Abra o arquivo `simulador.js` em um navegador ou em um compilador online de JavaScript, como [Programiz Online Compiler](https://www.programiz.com/javascript/online-compiler).
2. Insira os dados solicitados (nome, tipo de conta, operação, saldo e valor quando necessário).
3. Confira as mensagens e o saldo final exibidos no console.

---

## Exemplo de uso:
- Nome do correntista: Lucas Cordeiro
- Tipo de conta: 1
- Operação: 1
- Valor do saque: 2500
- Saldo atual: 3000


**Saída:**

- Correntista: Lucas Cordeiro
- Conta: 1
- Operação: Saque
- Mensagem: Saque realizado com sucesso.
-  Saldo final: R$ 500.00
- Status: Saldo positivo


---

## Melhorias futuras

- Interface gráfica (HTML/CSS) para melhor interação
- Validação de entradas numéricas
- Histórico de operações por usuário
- Suporte a múltiplas contas simultâneas

---

