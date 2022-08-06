

mostrarTamanho('o rato roeu a roupa do rei de roma')

function mostrarTamanho(frase) {
    let separarFrase = frase.split(' ')
    // separarFrase.forEach(palavra => {
    //     console.log(palavra.length)
    // });

    for (let i = 0; i < separarFrase.length; i++) {
        console.log(separarFrase[i].length)
    }
}