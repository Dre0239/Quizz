var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
//let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("hi andra");
  startButton.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  setNextQuestion();
}
// Timer function
function startTimer() {
  timerEl.textContent = secondsLeft;
  let timerInterval = setInterval(() => {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
function nextQuestion() {
  currentQ++;
  // If there are no more questions, end the game
  if (currentQ === shuffledQuestionBank.length) {
    secondsLeft = 0;
    endGame();
  } else {
    // Otherwise populate questionEl
    questionEl.textContent = shuffledQuestionBank[current].question;
    // and populate answer buttons
    let arr = [answer1, answer2, answer3, answer4];
    let i = 0;
    arr.forEach((element) => {
      element.textContent =
        shuffledQuestionBank[currentQ].answersArray[i].answer;
      i++;
    }, i);
  }
}

function getCorrectAnswer(current) {
  let arr = shuffledQuestionBank[currentQ].answersArray;
  // loop through answersArray, identify correct answer
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].correct) {
      // return correct answer.
      return arr[j].answer;
    }
  }
}
var qiestion = [
  {
    questios: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C+", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },
  {
    questios: "What year was JavaScript launched??",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1990", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    questios: " How does a for loops start?",
    answers: [
      { text: "for (i = 0 ; i <= 5)", correct: false },
      { text: "for (i =0 ; i <= 5 ; i++)", correct: true },
      { text: "for (i <=5 ; i++)", correct: false },
      { text: "for (i = 1 to 5)", correct: true },
    ],
  },
  {
    questios: " How do you round a number to the nearest integer?",
    answers: [
      { text: "Math.round", correct: true },
      { text: "rnd", correct: false },
      { text: "Round", correct: false },
      { text: "Math.rnd", correct: false },
    ],
  },
];
