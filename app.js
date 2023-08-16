'use strict';

const botaoSomar = document.getElementById('somar');
const botaoIdentificar = document.getElementById('identificar');

function somar() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    const total = numero1 + numero2;

    resultado.textContent = total;
}

function identificar() {
    const numero = Number(document.getElementById("numero-item2").value);
    const resultado = document.getElementById("resultado-item2");
    let msg = ''; // Declare a variável msg aqui e atribua um valor vazio

    if (numero > 0) {
        msg = 'positivo'; 
    } else if (numero < 0) {
        msg = 'negativo'; 
    } else {
        msg = 'zero'; 
    }

    resultado.textContent = msg;
}

botaoSomar.addEventListener('click', somar);
botaoIdentificar.addEventListener('click', identificar);