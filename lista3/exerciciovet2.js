const leia = require ('readline-sync');

let lista = [];
let soma = 0;
let pares = 0;

for (let contador = 0; contador < 10; contador++){
    lista[contador] = leia.questionInt("Manda aquele numero meu mano: ");
    soma = soma + lista[contador];
}

for(let contador = 1; contador < 10; contador+=2){
    console.log(`Elementos ${lista[contador]} está nos índices ímpares: ${contador}`);    
}

for(let contador = 0; contador < 10; contador++){
    if(lista[contador] % 2 === 0){
        console.log(`Elementos pares: ${lista[contador]}`);
    }
}

console.log(`\nSoma dos valores: ${soma}`);
console.log(`\nA média dos valores é: ${(soma/10).toFixed(2)}`)

//THIAGAO AJUDOU XD