let titulo = document.getElementById("titulo");
let minutos = document.getElementById("minutos");
let botao = document.getElementById("botao");
let nomeFilme = document.getElementById("nomeFilme");
let duracao = document.getElementById("duracao");

const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const restoMinutos = minutos % 60;
    return `Filme tem ${horas} hora(s) e ${restoMinutos} minuto(s)`;
};

window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        nomeFilme.textContent = titulo.value;

        duracao.textContent = converter(Number(minutos.value));

        (titulo.value = ""), (minutos.value = "");

        titulo.focus();
    }
});

botao.addEventListener("click", () => {
    nomeFilme.textContent = titulo.value;

    duracao.textContent = converter(Number(minutos.value));

    (titulo.value = ""), (minutos.value = "");

    titulo.focus();
});
