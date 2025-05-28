const leia = require('readline-sync');

let salario, adNoturno, horaExtra, desconto, liquido;

salario = leia.questionFloat("Salário Bruto: ");
adNoturno = leia.questionFloat("Adicional Noturno: ");
horaExtra = leia.questionFloat("Horas Extras: ");
desconto = leia.questionFloat("Descontos: ");

liquido = salario + adNoturno + (horaExtra*5) - desconto;

console.log("Salário Líquido: " +
    new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(liquido)
);