// receba um valor para avaliar 
// função exibe se o valor é par ou impar


const resultado = medidorParOuImpar(10)
console.log(resultado)

function medidorParOuImpar(valor) {
    return valor % 2 === 0 ? 'par' : 'impar' ;
}

