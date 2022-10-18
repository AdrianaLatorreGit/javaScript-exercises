let display = document.getElementById('display');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let comecar = document.getElementById('comecar');
let pausar = document.getElementById('pausar');
let cancelar = document.getElementById('cancelar');

let interval;

for (let i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value=' + i + '>' + i + '</option>';
}

for (let i = 0; i <= 60; i++) {
    segundos.innerHTML += '<option value=' + i + '>' + i + '</option>';
}

comecar.addEventListener('click', function () {
    let minutoAtual = minutos.value;
    let segundoAtual = segundos.value;
    display.childNodes[1].innerHTML = minutoAtual + ': ' + segundoAtual;

    interval = setInterval(function () {
        segundoAtual--;

        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                document.getElementById('sound').play();
                clearInterval(interval);
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ': ' + segundoAtual;
    }, 1000);
});

pausar.addEventListener('click', function () {
    clearInterval(interval);
});

cancelar.addEventListener('click', function () {
    clearInterval(interval);
    display.childNodes[1].innerHTML = '00:00';
});
