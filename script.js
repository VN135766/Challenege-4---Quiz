
var questions = [
    {
        question: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        question: "The condition in an IF / ELSE statement is enclosed within ____?",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses",
    },
    {
        question: "Arrays in JaveScript can be used to store?",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above",
    },
    {
        question: "String variables must be enclosed within ___, when being assigned to variables",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Curly Brackets",
    },
    {
        question: "A very useful took used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        answer: "Console.log",
    },];

var introductionsEl = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#list-question");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var startTime = 60;
var intervalId;
var correctCount = 0;
var questionIndex = 0;

function endQuiz() {
    window.location = "./scores.html";
}

function timeUpdate() {
    startTime--;
    timerEl.textContent = "Time remaining " + startTime;
    if (startTime <= 0) {
        endQuiz();
    }
}

function addQuestion() {
    intervalId = setInterval(timeUpdate, 1000);
    questionEl.textContent = questions[questionIndex].question;
    optionsEl.innerHTML = "";
    resultEl.innerHTML = "";
    var choices = questions[questionIndex].choices;
    var choicesLength = choices.length;

    for (var i = 0; i < choicesLength; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.className = "question-choices";
        var questionButton = document.createElement("button");
        questionButton.className = "choices";
        questionButton.textContent = choices[i];
        questionListItem.append(questionButton);
        optionsEl.append(questionListItem);
    }
};

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        startTime = 0;
    }
    addQuestion();
}

function correctAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("button")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            resultEl.textContent = "Correct";
            correctCount++;
        } else {
            resultEl.textContent = "Incorrect";
            startTime = startTime - 8;
            timerEl.textContent = startTime;
        }
    }
    nextQuestion();
};



var startQuiz = function () {
    introductionsEl.remove();
    addQuestion();
    optionsEl.addEventListener("click", correctAnswer);
};