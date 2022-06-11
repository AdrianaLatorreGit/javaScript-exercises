const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const resultado = document.getElementById("res");

btn1.addEventListener("click", () => {
    const a = Number(valor1.value);
    const b = Number(valor2.value);
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = `Digite um número válido`;
    } else {
        resultado.innerText = `Resultado: ${somar(a, b)}`;
    }
    valor1.value = "";
    valor2.value = "";
});

btn2.addEventListener("click", () => {
    const a = Number(valor1.value);
    const b = Number(valor2.value);
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = `Digite um número válido`;
    } else {
        resultado.innerText = `Resultado: ${subtrair(a, b)}`;
    }
    valor1.value = "";
    valor2.value = "";
});
btn3.addEventListener("click", () => {
    const a = Number(valor1.value);
    const b = Number(valor2.value);
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = `Digite um número válido`;
    } else {
        resultado.innerText = `Resultado: ${multiplicar(a, b)}`;
    }
    valor1.value = "";
    valor2.value = "";
});
btn4.addEventListener("click", () => {
    const a = Number(valor1.value);
    const b = Number(valor2.value);
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = `Digite um número válido`;
    } else {
        resultado.innerText = `Resultado: ${dividir(a, b)}`;
    }
    valor1.value = "";
    valor2.value = "";
});
