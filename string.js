// Criar um método para ler as propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

// objeto
const filme = {
    titulo: 'Stranger Things',
    ano: 2016,
    criadores: 'Irmãos Duffer',
    Personagem: 'Onze, Steve, Dustin'
}


verificadorDeString(filme)
function verificadorDeString(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop])
        }
    }
}
