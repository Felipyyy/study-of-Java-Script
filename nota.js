// // Exercicio nota escolar
// // obter a média a partir de um array

// 0-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70, 70, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas) {
    // let n1 = nota[0]
    // let n2 = nota[1]
    // let n3 = nota[2]

    // const resultado = ((n1 + n2 + n3) / 3)

    let soma = 0
    for (let nota of notas) {
        soma += nota
    }

    const media = soma/(notas.length)

    if (media <= 49) {
        return 'F'
    }
    else if (media <= 59) {
        return 'E'
    }
    else if (media <= 69) {
        return 'D'
    }
    else if (media <= 79) {
        return 'C'
    }
    else if (media <= 89) {
        return 'B'
    }
    else {
        return 'A'
    }
}