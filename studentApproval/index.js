let nomeAluno = document.getElementById("nomeAluno");
let res = document.getElementById("res");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let nota4 = document.getElementById("nota4");
let botao = document.getElementById("botao");
let mediaNotas = document.getElementById("mediaNotas");

const aprovado = (media) => {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return " de Recuperação";
    } else {
        return "Reprovado";
    }
};

let resultado = () => {
    const valor1 = Number(nota1.value);
    const valor2 = Number(nota2.value);
    const valor3 = Number(nota3.value);
    const valor4 = Number(nota4.value);
    const media = (valor1 + valor2 + valor3 + valor4) / 4;
    const nomeAlunoValor = nomeAluno.value;
    mediaNotas.innerText = media;

    res.innerText = `${nomeAlunoValor}, você está ${aprovado(media)}`;
};

botao.addEventListener("click", resultado);
