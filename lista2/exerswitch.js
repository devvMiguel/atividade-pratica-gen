const leia = require('readline-sync');

let valor, quant;

let codCardapio = leia.questionInt("Codigo do Produto: ",
     {limitMessage: "Erro: precisa ser um numero.d"}); 

quant = leia.questionInt("Quantidade: ",
     {limitMessage: "Erro: precisa ser um numero."});

// Usei a conversão de moeda apenas para teste haha


switch(codCardapio){
    case 1:
        valor = quant * 10;
        console.log("\nProduto: Cachorro Quente");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    case 2:
        valor = quant * 15;
        console.log("\nProduto: X-Salada");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    case 3:
        valor = quant * 18;
        console.log("\nProduto: X-Bacon");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    case 4:
        valor = quant * 12;
        console.log("\nProduto: Bauru");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    case 5:
        valor = quant * 8;
        console.log("\nProduto: Refrigerante");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    case 6:
        valor = quant * 13;
        console.log("\nProduto: Suco de laranja");
        console.log(`\nValor Total: ${new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valor)}`);
        break;
    default:
        console.log("Digite um código válido.");
}