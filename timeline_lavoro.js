// timeline_lavoro.js

// Timeline interattiva dei diritti del lavoro

const timelineEvents = [
  {
    year: "1865",
    title: "I Malavoglia di Verga",
    description: "Rappresentazione delle dure condizioni di lavoro minorile nel Sud Italia.",
    source: "Letteratura italiana",
    image: "img/verga.jpg"
  },
  {
    year: "1848",
    title: "Manifesto del Partito Comunista",
    description: "Marx e Engels pongono le basi teoriche per la lotta di classe e la dignità del lavoro.",
    source: "Filosofia",
    image: "img/marx.jpg"
  },
  {
    year: "1948",
    title: "Costituzione Italiana",
    description: "Entrano in vigore gli articoli fondamentali sul lavoro (artt. 1, 4, 41).",
    source: "Educazione civica",
    image: "img/costituzione.jpg"
  },
  {
    year: "1945",
    title: "Animal Farm di Orwell",
    description: "Critica al lavoro sfruttato e al totalitarismo travestito da rivoluzione.",
    source: "Letteratura inglese",
    image: "img/orwell.jpg"
  },
  {
    year: "2050?",
    title: "Lavoro del futuro",
    description: "Intelligenze artificiali e automazione: come cambierà il lavoro umano?",
    source: "Proiezione futura",
    image: "img/future.jpg"
  }
];

function renderTimeline(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "<h2>Timeline dei Diritti del Lavoro</h2>";

  timelineEvents.forEach(event => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-content">
        <h3>${event.year} - ${event.title}</h3>
        <p>${event.description}</p>
        <small><em>${event.source}</em></small>
        <img src="${event.image}" alt="${event.title}" class="timeline-image">
      </div>
    `;
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline("timeline");
});
