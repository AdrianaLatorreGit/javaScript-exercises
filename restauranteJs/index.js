let valor = document.getElementById("valor");
let consumo = document.getElementById("consumo");
let botao = document.getElementById("botao");
let res = document.getElementById("res");

// const calculo = (consumo, valor) => {
//     return (consumo * valor) / 1000;
// };
// console.log(calculo(700, 40));

//! Outra maneira
// const calculo = () => {
//     const quilo = Number(valor.value.replace(",", "."));
//     const consumoValor = Number(consumo.value);
//     const resultado = (consumoValor * quilo) / 1000;
//     res.textContent = `Valor a pagar: ${resultado.toFixed(2)}`;
// };
// botao.addEventListener("click", calculo);

botao.addEventListener("click", () => {
    const quilo = Number(valor.value.replace(",", "."));
    const consumoValor = Number(consumo.value);
    const resultado = (consumoValor * quilo) / 1000;
    res.textContent = `Valor a pagar: ${resultado.toFixed(2)}`;
});


window.addEventListener("keypress",(e)=>{
    const quilo = Number(valor.value.replace(",", "."));
    const consumoValor = Number(consumo.value);
    const resultado = (consumoValor * quilo) / 1000;
    if(e.key === "Enter"){
        res.textContent = `Valor a pagar: ${resultado.toFixed(2)}`
    }
})
