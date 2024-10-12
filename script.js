const inputAdicionar = document.querySelector('.adicionar')
const inputSair = document.querySelector('.sair')
const buttonAddE = document.querySelector('.addE')
const buttonAddS = document.querySelector('.addS')
const vEntrada = document.querySelector('.vEntrada')
const vSaida = document.querySelector('.vSaida')
const vRestante = document.querySelector('.vRestante')
const msg = document.querySelector('.msg')


/* let soma = 0
buttonAddE.addEventListener('click', () => {
    let novoValor = Number(inputAdicionar.value)
    soma += novoValor
    vEntrada.textContent = soma
    inputAdicionar.value = ''
    return soma
})

let somaSaida = 0
buttonAddS.addEventListener('click', () => {
    let novoValor = Number(inputSair.value)
    somaSaida += novoValor
    vSaida.textContent = somaSaida
    inputSair.value = ''
    vRestante.textContent = (soma - somaSaida)
})
 */
// falta corrigir para o valor restante nao ficar negativo

let somaEntrada = 0
let somaSaida = 0

buttonAddS.disabled = true

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
const adicionarValor = (nome, input, soma) => {
    let novoValor = Number(input.value)
    soma += novoValor
    nome.textContent = formatter.format(soma)
    input.value = ''
    return soma
}

const message = (input) => {
    if (input.value === '' || Number(input.value < 0)) {
        msg.innerText = 'Por vafor digite o valor a ser adicionado'
    } else {
        msg.innerText = ''
    }

}

buttonAddE.addEventListener('click', () => {
    message(inputAdicionar)
    if (inputAdicionar.value < 0 || inputAdicionar.value === '') {
        inputAdicionar.value = ''
    } else {

        somaEntrada = adicionarValor(vEntrada, inputAdicionar, somaEntrada)
        ativarBotao()

        vEntrada.style.color = 'green'

        vRestante.textContent = formatter.format(somaEntrada - somaSaida)
    }
})

buttonAddS.addEventListener('click', () => {
    message(inputSair)
    if (inputSair.value === '' || inputSair.value < 0) {
        inputSair.value = ''
    } else {

        vSaida.style.color = 'red'

        somaSaida = adicionarValor(vSaida, inputSair, somaSaida)
        let restante = vRestante.textContent = formatter.format(somaEntrada - somaSaida)
        if (restante < '0') {
            buttonAddS.disabled = true
            msg.innerText = 'SALDO NEGATIVO, favor depositas mais dinheiro'
        }
        if (restante === 'R$ 0,00') {
            buttonAddS.disabled = true
            msg.innerText = 'ACABOU O DINHEIRO!'
        }

    }

})

const ativarBotao = () => {
    if (somaEntrada > somaSaida) {
        buttonAddS.disabled = false
    }

}
