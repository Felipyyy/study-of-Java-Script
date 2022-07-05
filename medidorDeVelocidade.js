// velocidade máxima de até 70
// a cada 5km acima do limite ganha 1 ponto
// Math.floor()
// caso os pontos sejam maiores do que 12 = 'carteira suspensa'

verificadorDeVelocidade = medidorVel(75)

function medidorVel(vel) {
    const velocidadeMax = 70
    const pontosPorKm = 5
    if (vel <= velocidadeMax) {
        console.log('ok')
    }
    else {
        const pontos = Math.floor((vel - velocidadeMax) / pontosPorKm)

        if (pontos > 12) {
            console.log('carteira suspensa')
        } else {
            console.log('pontos', pontos)
        }
    } 
}