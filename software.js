var altura = 0
var largura = 0


function ajustaTamanhoPalcoJogo() {
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}   

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * window.innerWidth) - 90
    var posicaoY = Math.floor(Math.random() * window.innerHeight) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)
    

    var mosquito = document.createElement('img')
    mosquito.src = 'images/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}