const leia = require ('readline-sync');

let continuar = true;
let countMaior = 0;
let countMenor = 0;

while(continuar){
    idade = leia.questionInt("Digite uma idade: ")
    
    if(idade < 0){
        continuar = false;
    }
    else if(idade > 50){
        countMaior++;
    }
    else if (idade < 21){
        countMenor++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${countMenor}`);
console.log(`Total de pessoas maiores de 50 anos: ${countMaior}`);