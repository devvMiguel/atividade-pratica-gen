const leia = require('readline-sync');

let nomeColab, ajuste, codCargo, cargo, salario, newSalar;

nomeColab = leia.question("Nome do colaborador: ")
codCargo = leia.questionInt("\nCargo: ")
salario = leia.questionFloat("Salário: ", {
        limitMessage: "Erro: precisa ser um numero."
     });
   
switch(codCargo){
    case 1:
        cargo = "Gerente"
        ajuste = 10 / 100;
        break;
    case 2:
        cargo = "Vendedor"
        ajuste = 7 / 100;
        break;
    case 3:
        cargo = "Supervisor"
        ajuste = 9 / 100;
        break;
    case 4:
        cargo = "Motorista"
        ajuste = 6 / 100;
        break;
    case 5:
        cargo = "Estoquista"
        ajuste = 5 / 100;
        break;
    case 6:
        cargo = "Técnico de TI"
        ajuste = 8 / 100;
        break;
    default: 
        console.log("Digite um cargo válido.");
        return
}
    newSalar = salario + (ajuste * salario);

    console.log(`\nNome do colaborador: ${nomeColab}`)
    console.log(`\nCargo: ${cargo}`)
    console.log(`Salário ajustado: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(newSalar)}`);