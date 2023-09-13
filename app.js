'use strict'

const button = document.getElementById('somar')
const buttonIdent = document.getElementById('ident')
const botaoMedia = document.getElementById('media')
const botaoSomar3 = document.getElementById('somar3')
const botaoVerificar = document.getElementById('verificar')

function somar () {
    const numeroUm = Number(document.getElementById('n1').value)
    const numeroDois = Number(document.getElementById('n2').value)
    const resultado1 = document.getElementById('resultado1')
    const soma = numeroUm + numeroDois

    resultado1.textContent = soma
}button.addEventListener('click', somar)

function identificar () {
    const numeroItem2 = Number(document.getElementById('numberit2').value)
    const positivoOuNegativo = document.getElementById('identPosNeg')

    if (numeroItem2 > 0 ){
        positivoOuNegativo.textContent = 'Positivo'
    }else if(numeroItem2 < 0){
        positivoOuNegativo.textContent = 'Negativo'
    }else {
        positivoOuNegativo.textContent = 'Zero'
    }   
}buttonIdent.addEventListener('click', identificar)

function Media () {

    const nota1 = Number(document.getElementById('nota-1').value)
    const nota2 = Number(document.getElementById('nota-2').value)
    const nota3 = Number(document.getElementById('nota-3').value)
    const nota4 = Number(document.getElementById('nota-4').value)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){

        alert(`Sua média é ${media}.Você foi aprovado!`)

    } else {
        let notaExame = prompt(`Sua média é ${media}. Insira sua nota de exame`)
        const media2 = (media + Number(notaExame)) / 2
        
        if (media2 >= 5){
            alert(`Sua nova média é ${media2}. Aprovado em exame`)
        }else{
            alert(`Sua nova média é ${media2}. Você foi reprovado`)
        }
    }
}botaoMedia.addEventListener('click', Media)