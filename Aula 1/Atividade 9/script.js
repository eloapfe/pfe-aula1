function calcularReajuste() {
    let salarioAtual = Number(document.getElementById('salarioAtual').value);
    let resultado = document.getElementById('resultado');
    let aumento = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = 0.15; // 15%
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = 0.12; // 12%
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = 0.09; // 9%
    } else if (salarioAtual >= 3000) {
        aumento = 0.06; // 6%
    } else {
        resultado.innerHTML = "Salário inválido. O salário deve ser maior ou igual a R$ 1.500,00.";
        return;
    }

    let novoSalario = salarioAtual * (1 + aumento);
    resultado.innerHTML = `Salário Atual: R$ ${salarioAtual.toFixed(2)} <br>Reajuste: ${aumento * 100}% <br>Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}