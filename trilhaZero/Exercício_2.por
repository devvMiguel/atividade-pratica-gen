programa
{
    
    inteiro vet[10], i, soma =0, media
    

    funcao inicio()
    {

        escreva("Digite 10 números inteiros:")
        para (i = 0; i < 10; i++)
        {
            leia(vet[i])
        }

        
        escreva("\nElementos nos índices ímpares:\n")
        para (i = 0; i < 10; i++)
        {
            se (i % 2 != 0)
            {
                escreva( vet[i] )
            }
        }
// SÓ NÃO CONSEGUI SEPARAR OS ELEMENTOS AAAAAAAA ;(
       
        escreva("\nElementos pares:\n")
        para (i = 0; i < 10; i++)
        {
            se (vet[i] % 2 == 0)
            {
                escreva(vet[i])
            }
        }

        para (i = 0; i < 10; i++)
        {
            soma = soma + vet[i]
        }

        media = soma / 10.0

        escreva("\nSoma \n", soma, "\n")
        escreva("Média: \n", media)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 349; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */