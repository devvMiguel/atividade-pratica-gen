const leia = require ('readline-sync');

let soma = 0, numb;

do{
    numb = leia.questionInt("Digite um numero: ");
    
    if(numb > 0){
        soma = soma + numb;
    }
}
while(numb != 0);

console.log(`A soma dos números positivos é: ${soma}`);