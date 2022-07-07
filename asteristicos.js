// criar uma função que exibe a quantidade de asteristicos que aquela linha possui

quantidadeDeLetras(10)

function quantidadeDeLetras(letras) {
    let ast = ''

    for (let i = 0; i <= letras; i++) {
        ast += '*'
        console.log(ast)
    }
}

