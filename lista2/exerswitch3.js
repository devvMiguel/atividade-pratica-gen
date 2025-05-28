const leia = require('readline-sync');

let numero1, numero2, codOperacao, operacao, operador, resultado;

numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");
codOperacao = leia.questionInt("Operacao: ");

switch(codOperacao){
    case 1:
        operador = "+"
        operacao = numero1 + numero2;
        break;
    case 2:
        operador = "-"
        operacao = numero1 - numero2;
        break;
    case 3:
        operador = "*"
        operacao = numero1 * numero2;
        break;
    case 4:
        operador = "/"
        operacao = numero1 / numero2;
        break;
    default:
            console.log("Operação Inválida!");
            return
    }

    console.log(`${numero1.toFixed(1)} ${operador} ${numero2.toFixed(1)} = ${operacao.toFixed(1)}`);