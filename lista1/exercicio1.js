const leia = require('readline-sync');

let salario, abono, novoSalario;

salario = leia.questionFloat("Salário: ");
abono =  leia.questionFloat("Abono: ");

novoSalario = salario + abono;

console.log("Novo Salário: " +
new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
}).format(novoSalario));