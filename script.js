const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      choices: ["<style>","<script>","<link>","<css>"],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      choices: ["color", "backgroundColor", "bgColor", "background"],
      correctAnswer: 1
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      choices: ["onclick", "onmouseover", "onchange", "onsubmit"],
      correctAnswer: 0
    },
    {
      question: "Which JavaScript method is used to add an element to the end of an array?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0
    },
    {
      question: "What does CSS box-model consist of?",
      choices: ["Margin, border, padding, content", "Margin, border, content", "Border, padding, content", "Margin, padding, content"],
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
