const leia = require ('readline-sync');

let age, continuar,  codDev,  codGender;
let moreForty = 0, womenFrontend = 0, moreThirty =0,mGender =0, total=0, somaAge=0, media =0, nonB =0, hGender =0,otherGender =0, backEnd =0, frontEnd =0, mobile =0, fullStack =0;
let yesNo = true;

while(yesNo === true){
    age = leia.questionInt("\nIdade: ",
    {limitMessage: "Erro: insira um numero inteiro. "});
                                        // TIVE AJUDA DO GEPETO AQUI, mas diria que 60% do código eu fiz solo :).
    somaAge = somaAge + age;                                      

    codGender = leia.questionInt("Identidade de Genero: ",
    {limitMessage: "Erro: insira um numero inteiro. "});
    codDev = leia.questionInt("Pessoa Desenvolvedora: ",
    {limitMessage: "Erro: insira um numero inteiro. "});

let isHomem = false;
let isNonBi = false;
let isMobile = false;
let isFullStack = false;
let isMulher = false;

    switch(codGender){
        case 1:
            mGender++;
            isMulher = true;
            break;
        case 2:
            hGender++;
            isHomem = true;
            break;
        case 3:
            nonB++;
            isNonBi = true;
            break;
        case 4:
            mGender++;
            isMulher = true;
            break;
        case 5:
            hGender++;
            isHomem = true;
            break;
        case 6:
            otherGender++
            break;
        default:
            console.log("Digite um número válido");
    }

    switch(codDev){
        case 1:
            backEnd++;
            break;
        case 2:
            frontEnd++;
            break;
        case 3:
            mobile++;
            isMobile = true;
            break;
        case 4:
            fullStack++;
            isFullStack = true;
            break;
        default:
            console.log("Digite um número válido");
    }

    if (isMulher && codDev === 2) {
        womenFrontend++;
    }

    if(age > 40 && isHomem && isMobile){
        moreForty++;
    }

    if(age < 30 && isNonBi && isFullStack){
        moreThirty++;
    }

    total += 1;

    continuar = leia.keyIn("\nDeseja continuar (S/N): ", { limit: 'SN' });
    if (continuar === 'S' || continuar === 's') {
        yesNo = true;
    } else {
        yesNo = false;
    }
}

media = somaAge/total;

console.log(`Total de pessoas desenvolvedoras Backend é: ${backEnd}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend é: ${womenFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos é: ${moreForty}`);
console.log(`Total de Pessoas Não Binárias desenvolvedores FullStack menores de 30 anos é: ${moreThirty}`);
console.log(`O número total de pessoas que responderam à pesquisa é: ${total}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media.toFixed(2)}`);