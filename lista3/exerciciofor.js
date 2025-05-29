const leia = require ('readline-sync');

let multiplo;

let number1 = leia.questionInt("Digite o primeiro numero do intervalo: ",
     {limitMessage: "Erro: precisa ser um numero. "});
let number2 = leia.questionInt("Digite o ultimo numero do intervalo: ",
     {limitMessage: "Erro: precisa ser um numero. "});

if(number2 > number1){
    for(number1;number1 < number2; number1++ ){
        if(number1 % 3 ===0 && number1 % 5 ===0){
            multiplo = number1;
            console.log(`${multiplo} é múltiplo de 3 e 5`);
        }
    }
}
else{
    console.log("Intervalo inválido!");
}