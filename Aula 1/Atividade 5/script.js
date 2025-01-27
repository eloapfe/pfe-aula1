function calcularAumento() {
    let nome = document.getElementById('nome').value;
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let novoPreco = 0;

    if (preco < 0) {
        resultado.innerHTML = "O preço não pode ser negativo.";
        return;
    }

    if (preco < 1000) {
        novoPreco = preco * 1.05; // Aumento de 5%
    } else {
        novoPreco = preco * 1.07; // Aumento de 7%
    }

    resultado.innerHTML = `Mercadoria: ${nome} <br>Novo Preço: R$ ${novoPreco.toFixed(2)}`;
}