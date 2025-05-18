// script.js

// Esempio di quiz interattivo semplice
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz");

  const quizData = [
    {
      question: "Qual è l'articolo della Costituzione che stabilisce che l’Italia è fondata sul lavoro?",
      options: ["Articolo 1", "Articolo 4", "Articolo 41"],
      answer: "Articolo 1"
    },
    {
      question: "Quale articolo riconosce il diritto al lavoro per tutti i cittadini?",
      options: ["Articolo 3", "Articolo 4", "Articolo 9"],
      answer: "Articolo 4"
    },
    {
      question: "Quale articolo limita l’iniziativa economica se danneggia dignità e sicurezza?",
      options: ["Articolo 35", "Articolo 41", "Articolo 11"],
      answer: "Articolo 41"
    }
  ];

  function createQuiz() {
    const quizHTML = quizData.map((item, index) => {
      const options = item.options.map(
        opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
      ).join("");
      return `
        <div class="quiz-item">
          <p><strong>${item.question}</strong></p>
          ${options}
        </div>
      `;
    }).join("");

    quizContainer.innerHTML += `
      <div id="quiz-section">
        ${quizHTML}
        <button id="submitQuiz">Verifica Risposte</button>
        <div id="quizResult"></div>
      </div>
    `;

    document.getElementById("submitQuiz").addEventListener("click", () => {
      let score = 0;
      quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === item.answer) {
          score++;
        }
      });
      document.getElementById("quizResult").innerText = `Hai risposto correttamente a ${score} su ${quizData.length} domande.`;
    });
  }

  // Attiva quiz
  createQuiz();
});
