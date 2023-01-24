var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");

var shuffledQuestions, currectQuestionIndex;
var quizScore = 0;

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

sklfsfla;
