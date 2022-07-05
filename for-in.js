// for in
const pessoa = {
    nome: 'Fellipy',
    idade: 19
}

for (let chave in pessoa) {
    console.log(chave, pessoa['nome'])
}


const cores = ['azul', 'vermelho', 'verde']

for (let indice in cores) {
    console.log(indice, cores[indice])
}


// for of
for (let cor of cores) {
    console.log(cor)
}