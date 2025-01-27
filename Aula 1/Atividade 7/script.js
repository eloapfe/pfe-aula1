function ordenarNumeros() {
    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value),
        Number(document.getElementById('numero4').value),
        Number(document.getElementById('numero5').value)
    ];

    // Ordena os números em ordem crescente
    numeros.sort((a, b) => a - b);
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Números em ordem crescente: ${numeros.join(', ')}`;
}