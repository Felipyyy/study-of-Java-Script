// receba uma quantidade de valores para avaliar 
// função exibe se cada valor é par ou impar


resultado = medidorParOuImpar(5)

function medidorParOuImpar(valor) {
    for (let i = 0; i <= valor; i++) {
        if (i % 2 === 0)
            console.log(i, 'par')
        else
            console.log(i, 'impar')
    }
}