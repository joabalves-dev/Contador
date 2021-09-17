import Countdown from "./countdown.js";

/* Trecho de código responsavel por checar a variavel date esta vazia */
const get = window.location.search.split('?date=')[1]
if (get === undefined || get === '') {
    window.location.href = 'index.html';
}

/* Responsavel por coverter a variavel em data */
let getdate = get.split('-');
getdate = new Date(getdate[0],parseInt(getdate[1]) - 1, getdate[2], 0,0,1)

/* Logica do contador */
const tempoParaOWWB = new Countdown(new Date(getdate));

/* Captura do HTML */
const tempos = document.querySelectorAll("[data-number]");

/* Manipulação do HTML */
function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOWWB.total[index];
    });
}

/* Excultar pelo menu uma vez */
mostrarTempo();

/* responsável por atualizar a cada um segundo. */
setInterval(mostrarTempo, 1000);