import questions from "./questions.js";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const result = document.querySelector(".result");

let counter = 0;
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  result.classList.add("d-none");
  counter = 0;
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.classList.add("btn-secondary");
    button.classList.add("mx-2");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // console.log(button.dataset.correct);
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  let selectedButton = e.target;
  selectedButton.classList.add("border");
  const correct = selectedButton.dataset.correct;
  //   console.log(correct);
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
  });
  if (selectedButton.dataset.correct) counter++;

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    score(counter);
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function score(c) {
  c = c * 10;
  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === c) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
