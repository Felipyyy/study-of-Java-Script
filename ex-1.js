// Escreva uma função que usa 2 numeros e retorna o maior entre eles


let valorMaior = maiorNum(10, 5)

function maiorNum(n1, n2) {
    if (n1 > n2) 
        return n1
    else return n2

    // outro modo
    // return n1 > n2 ? n1: n2;
}

console.log(valorMaior)
