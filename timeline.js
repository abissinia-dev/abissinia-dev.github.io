const eventi = [
  { anno: 1860, evento: "Lavoro minorile e rivoluzione industriale (Verga)" },
  { anno: 1948, evento: "Nascita della Costituzione Italiana - Art. 1, 4, 41" },
  { anno: 1949, evento: "Dichiarazione Universale dei Diritti Umani" },
  { anno: 1984, evento: "Animal Farm di Orwell: lavoro e potere" },
  { anno: 2000, evento: "Carta dei Diritti fondamentali dell’UE" },
  { anno: 2025, evento: "Smart work e diritti digitali" }
];

function creaTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = eventi.map(e => `
    <div class="timeline-event" tabindex="0" aria-label="Anno ${e.anno}: ${e.evento}">
      <h3>${e.anno}</h3>
      <p>${e.evento}</p>
    </div>
  `).join('');
}

function scrollTimeline(direction) {
  const container = document.getElementById('timeline-container');
  const scrollAmount = 250; // quanto scrollare ad ogni click
  if (direction === 'next') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  creaTimeline();

  document.getElementById('prev-btn').addEventListener('click', () => scrollTimeline('prev'));
  document.getElementById('next-btn').addEventListener('click', () => scrollTimeline('next'));
});
