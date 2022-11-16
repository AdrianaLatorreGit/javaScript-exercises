const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const res = document.getElementById("res");
const botao = document.getElementById("botao");

const calculaHoras = () => {
    const diasValor = Number(dias.value);
    const horasValor = Number(horas.value);
    const resposta = diasValor * 24 + horasValor;
    if (isNaN(resposta)) {
        res.style.color = "red";
        res.textContent = `Favor digite um número válido`;
    } else {
        res.textContent = `Resposta: ${resposta} horas`;
        dias.value = "";
        horas.value = "";
        dias.focus();
    }
};

botao.addEventListener("click", calculaHoras);
