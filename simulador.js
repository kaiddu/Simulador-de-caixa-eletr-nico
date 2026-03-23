let nome = prompt("Nome do correntista: ");
let tipoConta = Number(prompt("Tipo de conta: \n1 - Corrente \n2 - Poupança \n3 - Salário \n"));
let operacao = Number(prompt("Operação: \n1 - Saque \n2 - Depósito \n3 - Consultar Saldo \n"));
let saldo = Number(prompt("Saldo atual: "));
let valor = 0;

let limiteSaque;
switch (tipoConta) {
    case 1:
        limiteSaque = 3000;
        break;
    case 2:
        limiteSaque = 1500;
        break;
    case 3:
        limiteSaque = 2000;
        break;
    default:
        console.log("Tipo de conta inválido.");
        throw new Error("Encerrando execução");
}

let nomeOperacao;
switch (operacao) {
    case 1:
        nomeOperacao = "Saque";
        valor = Number(prompt("Valor do saque: "));
        break;
    case 2:
        nomeOperacao = "Depósito";
        valor = Number(prompt("Valor do depósito: "));
        break;
    case 3:
        nomeOperacao = "Consulta de Saldo";
        break;
    default:
        console.log("Operação inválida.");
        throw new Error("Encerrando execução");
}

let mensagem;

switch (true) {
    case operacao === 1 && valor > limiteSaque:
        mensagem = "Saque negado --- valor acima do limite diário.";
        break;
    case operacao === 1 && valor > saldo:
        mensagem = "Saque negado --- saldo insuficiente.";
        break;
    case operacao === 1:
        saldo -= valor;
        mensagem = "Saque realizado com sucesso.";
        break;
    case operacao === 2:
        saldo += valor;
        mensagem = "Depósito realizado com sucesso.";
        break;
    case operacao === 3:
        mensagem = "Consulta realizada.";
        break;
}

let statusSaldo = (saldo > 0)
    ? "Saldo positivo"
    : "Saldo zerado/negativo";

console.log("Correntista:", nome);
console.log("Conta:", tipoConta);
console.log("Operação:", nomeOperacao);
console.log("Mensagem:", mensagem);
console.log("Saldo final: R$", saldo.toFixed(2));
console.log("Status:", statusSaldo);
