function calcularINSS() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075; // 7.5%
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09; // 9%
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12; // 12%
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14; // 14%
    } else {
        desconto = 7087.22 * 0.14; // Teto de 14% sobre 7087.22
    }

    let salarioFinal = salario - desconto;
    resultado.innerHTML = `Desconto do INSS: R$ ${desconto.toFixed(2)} <br>Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}