function classificarTriangulo() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        resultado.innerHTML = "Os lados devem ser maiores que zero.";
        return;
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        resultado.innerHTML = "Triângulo EQUILÁTERO";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resultado.innerHTML = "Triângulo ISÓSCELES";
    } else {
        resultado.innerHTML = "Triângulo ESCALENO";
    }
}