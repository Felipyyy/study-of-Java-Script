// criar uma função que retorna a soma de todos os multiplos
// de 3 e de 5

// const multiplosDe3 = {
//     n1: 3,
//     n2: 6,
//     n3: 9
// }

// const multiplosDe5 = {
//     n1: 5,
//     n2: 10
// }

somarMultiplos(10)

function somarMultiplos(valor) {
    let multiplosDe3 = 0
    let multiplosDe5 = 0
    for (let i = 0; i <= valor; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i
        }
        if (i % 5 === 0) {
            multiplosDe5 += i
        }
    }

    const resultado = multiplosDe3 + multiplosDe5 
    console.log(resultado)
}
