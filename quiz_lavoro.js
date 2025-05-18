// quiz_lavoro.js

const quizData = [
  {
    question: "Cosa afferma l'articolo 1 della Costituzione Italiana?",
    options: [
      "L'Italia è una monarchia parlamentare",
      "L'Italia è una Repubblica democratica, fondata sul lavoro",
      "Ogni cittadino ha diritto al lavoro",
      "Lo Stato controlla tutte le imprese private"
    ],
    answer: 1
  },
  {
    question: "Cosa stabilisce l'articolo 4 della Costituzione?",
    options: [
      "Il diritto alla salute",
      "Il diritto all'istruzione",
      "Il diritto al lavoro e il dovere di svolgerlo",
      "Il diritto alla proprietà privata"
    ],
    answer: 2
  },
  {
    question: "Che tema affronta 'Animal Farm' di Orwell?",
    options: [
      "La guerra mondiale",
      "La rivoluzione francese",
      "La manipolazione del lavoro e del potere",
      "La crescita economica in Inghilterra"
    ],
    answer: 2
  },
  {
    question: "Qual è uno degli obiettivi principali della sicurezza sul lavoro?",
    options: [
      "Aumentare la produttività",
      "Risparmiare sui costi",
      "Tutelare la salute dei lavoratori",
      "Creare nuovi contratti"
    ],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz");
  const questionData = quizData[currentQuestion];

  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    <ul>
      ${questionData.options
        .map(
          (option, index) => `
        <li>
          <button onclick="submitAnswer(${index})">${option}</button>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}

function submitAnswer(selectedIndex) {
  if (selectedIndex === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `
    <h2>Quiz completato!</h2>
    <p>Hai ottenuto ${score} su ${quizData.length} risposte corrette.</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
