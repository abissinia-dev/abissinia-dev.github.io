// quiz.js

const domande = [
  {
    domanda: "Qual è il principale diritto sancito dall’articolo 1 della Costituzione italiana?",
    risposte: ["Libertà di stampa", "Diritto al lavoro", "Libertà di religione"],
    corretta: 1
  },
  {
    domanda: "Cosa garantisce l’articolo 4 della Costituzione?",
    risposte: ["Diritto all’istruzione", "Diritto al lavoro e alla dignità", "Libertà di associazione"],
    corretta: 1
  },
  {
    domanda: "L’articolo 41 riguarda:",
    risposte: ["L’iniziativa economica privata", "La sicurezza sul lavoro", "Il lavoro minorile"],
    corretta: 0
  },
  {
    domanda: "Quale di questi è un dovere del lavoratore?",
    risposte: ["Rispettare le norme di sicurezza", "Lavorare senza stipendio", "Non rispettare le regole"],
    corretta: 0
  }
];

let punteggio = 0;
let domandaCorrente = 0;

function mostraDomanda() {
  const contenitore = document.getElementById("quiz-container");
  if (!contenitore) return;
  const domanda = domande[domandaCorrente];

  let risposteHTML = domanda.risposte.map((r, i) => {
    return `<button onclick="scegliRisposta(${i})">${r}</button>`;
  }).join("");

  contenitore.innerHTML = `
    <div class="domanda">${domanda.domanda}</div>
    <div class="risposte">${risposteHTML}</div>
  `;
}

function scegliRisposta(indice) {
  if (indice === domande[domandaCorrente].corretta) {
    punteggio++;
    alert("Risposta corretta!");
  } else {
    alert("Risposta sbagliata!");
  }
  domandaCorrente++;
  if (domandaCorrente < domande.length) {
    mostraDomanda();
  } else {
    mostraRisultato();
  }
}

function mostraRisultato() {
  const contenitore = document.getElementById("quiz-container");
  contenitore.innerHTML = `
    <div class="risultato">Hai risposto correttamente a ${punteggio} su ${domande.length} domande!</div>
    <button onclick="riavviaQuiz()">Riprova</button>
  `;
}

function riavviaQuiz() {
  punteggio = 0;
  domandaCorrente = 0;
  mostraDomanda();
}

document.addEventListener("DOMContentLoaded", () => {
  mostraDomanda();
});
