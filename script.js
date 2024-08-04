const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which planet is closest to the Sun?",
      choices: ["Venus", "Mars", "Mercury", "Earth"],
      correctAnswer: 2
    },
    {
      question: "What is the largest country in the world by land area?",
      choices: ["Russia", "Canada", "China", "United States"],
      correctAnswer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"],
      correctAnswer: 0
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: 0
    }
  ];
  

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  for (let i = 0; i < choicesElement.children.length; i++) {
    const choice = choicesElement.children[i].querySelector('span');
    choice.textContent = currentQuestion.choices[i];
  }
}

function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
    const answer = parseInt(selectedChoice.value);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      quizContainer.style.display = 'none';
      resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    }
  }
}

nextButton.addEventListener('click', checkAnswer);

loadQuestion();
