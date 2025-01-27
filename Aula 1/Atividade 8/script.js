function determinarMaiorMenor() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');

    if (numero1 > numero2) {
        resultado.innerHTML = `O maior número é: ${numero1} <br>O menor número é: ${numero2}`;
    } else if (numero1 < numero2) {
        resultado.innerHTML = `O maior número é: ${numero2} <br>O menor número é: ${numero1}`;
    } else {
        resultado.innerHTML = `Os números são iguais: ${numero1}`;
    }
}