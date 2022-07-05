// receba uma quantidade de valores para avaliar 
// função exibe se cada valor é par ou impar


const resultado = medidorParOuImpar(10)
console.log(resultado)

function medidorParOuImpar(valor) {
    // for(let n = numero; n % 2 === 0;) {
    //     console.log('par')
    // }

    // if (valor % 2 === 0) 
    //     return true

    // else return false

    return valor % 2 === 0 ? 'par' : 'impar' ;
}

