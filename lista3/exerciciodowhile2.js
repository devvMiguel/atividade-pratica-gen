const leia = require ('readline-sync');

let count = 0, media =0, multiplos =0;
let numb;

do{
    numb = leia.questionInt("Digite um numero: ");
    
    if(numb !== 0 && numb % 3 === 0){
        multiplos += numb;
        count++;
    }
}
while(numb !== 0);

media = multiplos / count;

console.log(`A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);