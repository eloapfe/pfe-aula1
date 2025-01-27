function calcularSalario() {
    let salario = Number(document.getElementById('salario').value);
    let numeroFilhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');
    let salarioFamilia = 0;

    if (salario < 2000) {
        salarioFamilia = numeroFilhos * 45;
    }

    let salarioFinal = salario + salarioFamilia;
    resultado.innerHTML = `Salário Família: R$ ${salarioFamilia.toFixed(2)} <br>Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}