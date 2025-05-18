// lavoro2050.js

const scenariFuturi = [
  {
    titolo: "Lavoro e Intelligenza Artificiale",
    descrizione: "Nel 2050, molte professioni saranno affiancate o sostituite da AI. Il lavoro umano si concentrerà sulla creatività, l'empatia e l'etica."
  },
  {
    titolo: "Diritto al lavoro digitale",
    descrizione: "Il diritto al lavoro si estenderà anche agli spazi virtuali e al metaverso, con nuove tutele e norme per i lavoratori digitali."
  },
  {
    titolo: "Robotica e cooperazione umana",
    descrizione: "Le macchine non sostituiranno l’uomo, ma collaboreranno in ambienti lavorativi sicuri e interattivi."
  },
  {
    titolo: "Cittadinanza e lavoro globale",
    descrizione: "La globalizzazione digitale porterà a contratti di lavoro internazionali, con regole comuni ispirate alla Dichiarazione Universale dei Diritti Umani."
  }
];

function mostraScenari() {
  const contenitore = document.getElementById("futuro");
  contenitore.innerHTML = scenariFuturi
    .map(
      (scenario) => `
      <div class="scenario">
        <h3>${scenario.titolo}</h3>
        <p>${scenario.descrizione}</p>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  mostraScenari();
});
