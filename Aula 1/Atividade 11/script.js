function calcularDesconto() {
    let produto = document.getElementById('produto').value;
    let precoOriginal = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    // Define o percentual de desconto com base no produto
    switch (produto) {
        case 'camisa':
            desconto = 0.20; // 20%
            break;
        case 'bermuda':
            desconto = 0.10; // 10%
            break;
        case 'calca':
            desconto = 0.15; // 15%
            break;
        default:
            resultado.innerHTML = "Produto inválido.";
            return;
    }

    // Calcula o valor do desconto e o preço final
    let valorDesconto = precoOriginal * desconto;
    let precoFinal = precoOriginal - valorDesconto;

    resultado.innerHTML = `Preço Original: R$ ${precoOriginal.toFixed(2)} <br>Desconto: R$ ${valorDesconto.toFixed(2)} <br>Preço Final: R$ ${precoFinal.toFixed(2)}`;
}