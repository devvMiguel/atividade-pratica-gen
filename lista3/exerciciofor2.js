const leia = require ('readline-sync');

let par = 0, impar = 0;

for(let contador = 1; contador <=10; contador++){
    let numb = leia.questionInt(`Digite o ${contador} numero: `);
    if(numb % 2 ===0){
        par++;
    }
    else{
        impar++;
    }
}
console.log(`\nTotal de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`);