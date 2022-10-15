// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

//ano, mês, dia, horas, minutos, segundos, milesegundos
// const data = new Date(2019, 3, 20, 14, 14, 17, 27);

//string
// const data = new Date('2019-04-20 20:40:48.30');
// captura dia
// console.log('Dia', data.getDate());
// captura mês
// console.log('Mês', data.getMonth() + 1);
// captura ano
// console.log('Ano', data.getFullYear());
// captura hora
// console.log('Hora', data.getHours());
// captura minutos
// console.log('Min', data.getMinutes());
// captura segundos
// console.log('Sec', data.getSeconds());
// captura milesegundos
// console.log('ms', data.getMilliseconds());
// captura dia da semana
// console.log('Dia semana', data.getDay());

// contados em milesimos de segundos desde o marco 0 até agora
// console.log(Date.now());

// console.log(data.toString());

// ==============

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
