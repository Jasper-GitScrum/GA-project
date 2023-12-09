function handleQuestion1() {
    const answer1 = document.querySelector('input[name="PC"]:checked').value;
    const correctAnswerResult1 = document.querySelector("#correct-answer-result-1");
    const wrongAnswerResult1 = document.querySelector("#wrong-answer-result-1");
    displayResult(answer1, "B", correctAnswerResult1, wrongAnswerResult1);
  }
  
  function handleQuestion2() {
    const answer2 = document.querySelector('input[name="APM"]:checked').value;
    const correctAnswerResult2 = document.querySelector("#correct-answer-result-2");
    const wrongAnswerResult2 = document.querySelector("#wrong-answer-result-2");
    displayResult(answer2, "B", correctAnswerResult2, wrongAnswerResult2); 
  }
  
  function handleQuestion3() {
    const answer3 = document.querySelector('input[name="SC"]:checked').value;
    const correctAnswerResult3 = document.querySelector("#correct-answer-result-3");
    const wrongAnswerResult3 = document.querySelector("#wrong-answer-result-3");
    displayResult(answer3, "A", correctAnswerResult3, wrongAnswerResult3); 
  }
  
  function displayResult(userAnswer, correctAnswer, correctElement, incorrectElement) {
    if (userAnswer === correctAnswer) {
      correctElement.style.display = "block";
      incorrectElement.style.display = "none";
    } else {
      incorrectElement.style.display = "block";
      correctElement.style.display = "none";
    }
  }
  
const gameBtn = document.querySelector("#game-btn");
gameBtn.addEventListener("click", function () {
  document.querySelector("#quiz-container").style.display = "flex";
});

const submitAnswersBtn1 = document.querySelector("#submit-answers-btn-1");
submitAnswersBtn1.addEventListener("click", function (event) {
  event.preventDefault();
  handleQuestion1();
});

const submitAnswersBtn2 = document.querySelector("#submit-answers-btn-2");
submitAnswersBtn2.addEventListener("click", function (event) {
  event.preventDefault();
  handleQuestion2();
});

const submitAnswersBtn3 = document.querySelector("#submit-answers-btn-3");
submitAnswersBtn3.addEventListener("click", function (event) {
  event.preventDefault();
  handleQuestion3();
});
const finishedBtn = document.querySelector("#finished-btn")
finishedBtn.addEventListener("click", function(){
  alert ("Well done! I am so proud of you. You have taken the first step in your Project Management career. I look forward to seeing you in more courses and quizzes soon.")
})

