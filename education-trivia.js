async function fetchTriviaQuestions() {
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
    
    // Fetching the trivia questions from the API
    const response = await fetch(url);
    const data = await response.json();
  
    const triviaContainer = document.querySelector("#triviaQuestions");
    triviaContainer.innerHTML = "";
    const triviaData = data.results;

    for (let i = 0; i < triviaData.length; i++) {
        const triviaQuestion = triviaData[i];
        const questionSection = document.createElement("section");
        questionSection.className = "question";

        // Create and append the question text
        const questionText = document.createElement("p");
        questionText.className = "specific-questions";
        questionText.innerHTML = "Q" + (i + 1) + ": " + triviaQuestion.question;
        questionSection.appendChild(questionText);

        // Create and append the correct answer text
        const answerText = document.createElement("p");
        answerText.className = "correct-answer";
        answerText.innerHTML = "Answer: " + triviaQuestion.correct_answer;
        questionSection.appendChild(answerText);

        // Append the question section to the trivia container
        triviaContainer.appendChild(questionSection);
    }
}

fetchTriviaQuestions();

//Refresh the page to get 10 more questions from API
document.addEventListener('DOMContentLoaded', function() {
    const refreshButton = document.querySelector("#refresh-page");
    refreshButton.addEventListener("click", function() {
        window.location.reload();
    });
});

