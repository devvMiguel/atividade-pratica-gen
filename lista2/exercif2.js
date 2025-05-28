const leia = require('readline-sync');

let numer = leia.questionInt("Digite um numero: ");

let result;

if (numer % 2 === 0 && numer > 0) {
    console.log(`O número ${numer} é par e positivo!`);
} else if (numer % 2 === 0 && numer < 0) {
    console.log(`O número ${numer} é par e negativo!`);
} else if (numer % 2 !== 0 && numer > 0) {
    console.log(`O número ${numer} é ímpar e positivo!`);
} else {
    console.log( `O número ${numer} é ímpar e negativo!`);
}