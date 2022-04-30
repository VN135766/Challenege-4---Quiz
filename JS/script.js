var startTime = 60;
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

var introductionsEl = document.querySelector("#intro")
var questionEl = document.querySelector("#question")
questionIndex = 0;
var optionsEl = document.querySelector("#list-question")
var resultEl = document.querySelector("#result")
function addQuestion(){
    questionEl.textContent = questions[questionIndex].question;
    optionsEl.innerHTML = "";
    var choices = questions[questionIndex].choices;
    var choicesLength = choices.length;
}
var startQuiz = function () {
    introductionsEl.remove();
    addQuestion();

};
