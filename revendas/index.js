const veiculo = document.querySelector("#veiculo");
const preco = document.querySelector("#preco");
const button = document.querySelector("#button");

const resVeiculo = document.querySelector("#res-veiculo");
const resEntrada = document.querySelector("#res-entrada");
const resParcela = document.querySelector("#res-parcela");

const entrada = document.querySelector("#entrada");
const parcelas = document.querySelector("#parcelas");

const resEntradas = document.querySelector("#res-entradas");
const resParcelas = document.querySelector("#res-parcelas");

button.addEventListener("click", () => {
    const veiculoValue = veiculo.value;
    const precoValue = Number(preco.value.replace(",", "."));
    const entradaValue = Number(entrada.value.replace(",", "."));
    const parcelasValue = Number(parcelas.value.replace(",", "."));

    const valor = (precoValue - entradaValue) / parcelasValue;

    resVeiculo.textContent = `Promoção: ${veiculoValue}`;
    resEntrada.textContent = `Entrada de R$ ${entradaValue.toFixed(2)} Reais`;
    resParcela.textContent = `+ ${parcelasValue} de R$ ${valor.toFixed(
        2
    )} Reais`;

    veiculo.value = "";
    preco.value = "";
    entrada.value = "";
    parcelas.value = "";
    
});
