const btn = document.getElementById("btn");

function renderizaEstudante(estudante) {
    const tabela = document.querySelector(".tabela");
    const statusClasse =
        estudante.status === "Aprovado" ? "passou" : "reprovou";

    tabela.insertAdjacentHTML(
        /*html*/
        "beforeend",
        `
    <div class="estudante">
      <span>${estudante.nomeDoAluno}</span>
      <span>${estudante.media}</span>
      <span class="${statusClasse}">${estudante.status}</span>
    </div>
    `
    );
}

function temCampoVazio(campo) {
    return !campo;
}

function renderizaNotificacao() {
    const notificacao = document.querySelector(".notificacao");

    notificacao.insertAdjacentHTML(
        "beforeend",
        `<div class="erro">
      <span>O campo nome não pode ser vazio</span>
    </div>`
    );

    let interval = setInterval(() => {
        const erro = document.querySelector(".erro");
        notificacao.removeChild(erro);
        clearInterval(interval);
    }, 3000);
}

function pegueOsDados() {
    const nomeDoAluno = document.getElementById("nomeDoEstudante").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const media = (nota1 + nota2) / 2;
    const status = media >= 70 ? "Aprovado" : "Reprovado";

    const estudante = {
        nomeDoAluno,
        media,
        status,
    };

    if (temCampoVazio(nomeDoAluno)) {
        renderizaNotificacao();
    } else {
        renderizaEstudante(estudante);
    }
}

btn.addEventListener("click", pegueOsDados);
