const leia = require('readline-sync');

let a = leia.questionInt("Digite o numero A: ");
let b = leia.questionInt("Digite o numero B: ");
let c = leia.questionInt("Digite o numero C: ");

let soma = a + b;

if(soma > c ){
    console.log(`\n${b} + ${a} = ${soma} > ${c}`);
    console.log("\nA Soma de A + B é Maior do que C")
    
}else if(soma < c){
    console.log(`\n${a} + ${b} = ${soma} < ${c}`);
    console.log("\nA Soma de A + B é Menor do que C")
}else{
    console.log(`\n${a} + ${b} = ${soma} = ${c}`);
    console.log("\nA Soma de A + B é Igual a C")
}
