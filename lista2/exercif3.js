const leia = require('readline-sync');

let idade, nome, doacao;

nome = leia.question("Digite o nome do doador: ")
idade = leia.questionInt("Digite a Idade do doador: ")
doacao = leia.question("Primeira doação de sangue? (true/false) ")

if (idade >= 18 && idade <= 69){
    if(idade < 60){
        console.log(`${nome} está apto(a) para doar sangue!`);
    }
}
else{
        console.log(`${nome} não está apto(a) para doar sangue!`);
    }

if(idade >=60 && idade <= 69){
    if(doacao === "true"){
        console.log(`${nome} não está apto(a) para doar sangue!`);
    }
    else{
        console.log(`${nome} está apto(a) para doar sangue!`);
    }
}
