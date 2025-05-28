const leia = require('readline-sync');

let codOperacao, saldo = 1000.00, novoSaldo, valorSaque,operacao, deposito;

codOperacao = leia.questionInt("Operacao: ")

switch(codOperacao){
    case 1:
        operacao = "Saldo";
        console.log(`\nOperação - ${operacao}`);
        console.log(`\nSaldo: R$${saldo.toFixed(2)}`);
        break;
        
    case 2: 
        operacao = "Saque";
        console.log(`\nOperação - ${operacao}`);
        switch(true){
            case (valorSaque > saldo): 
                console.log("Saldo Insuficiente!");
                break;  
            default:       
                novoSaldo = saldo - valorSaque;
                console.log(`\nNovo Saldo: R$ ${novoSaldo.toFixed(2)}`);
        }
        break;
    case 3:
        operacao = "Depósito";
        console.log(`\nOperação - ${operacao}`);
        deposito = leia.questionFloat("Valor: R$ ")
        novoSaldo = saldo + deposito;
        console.log(`\nNovo Saldo: R$ ${novoSaldo.toFixed(2)}`);
        break;

    default:
        console.log("Operação Inválida!")
}