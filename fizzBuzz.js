// FizzBuzz
    // divisivel por 3 = Fizz
    // divisivel por 5 = Buzz
    // divisivel por 3 e 5 = FizzBuzz
    // divisivel por 3 ou 5 = entrada
    // Não é um número = NaN


const resultado = fizzBuzz(11)
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== "number") {
        return 'NaN'
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return 'fizzBuzz'
    }
    if (entrada % 3 === 0) {
        return 'fizz'
    }
    if (entrada % 5 === 0) {
        return 'Buzz'
    }
    else {
        return entrada
    }
}