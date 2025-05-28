const leia = require('readline-sync');

let tipo = leia.question("invertebrado ou vertebrado: ");

if(tipo === "vertebrado"){
    tipo = leia.question("ave ou mamifero? ");
        if(tipo === "ave"){
            tipo = leia.question("carnivoro ou onivoro? ");
            if(tipo === "carnivoro"){
                console.log("Aguia");
            }
            else{  
            console.log("Pomba");
            }
        }
        else {
            if(tipo === "mamifero"){
                tipo = leia.question("onivoro ou herbivoro? ");
                if(tipo === "onivoro"){
                    console.log("Homem");
                }   
                else{
                    console.log("Vaca");
                }
    
            }
        }       
}
else{
    tipo = leia.question("inseto ou anelidio? ");
        if(tipo === "inseto"){
            tipo = leia.question("hematofago ou herbivoro? ");
                if(tipo === "hematofago"){
                    console.log("Pulga");
                }
                else{
                    console.log("Lagarta");
                }
        }
        else{
            tipo = leia.question("hematofago ou onivoro? ");
                if(tipo === "hematofago"){
                    console.log("Sanguessuga");
                }
                else{
                    console.log("Minhoca");
                }
        }
    }