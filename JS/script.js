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


var startQuiz = function () {
    var x = setInterval(function () {
        startTime--;
        document.querySelector("#timer").textContent = "Timer " + startTime;
    }, 1000);
    document.querySelector("#question").textContent = questions[0].question;
    var taskLi = $("<li>")
    for (let i = 0; i < questions[0].choices.length; i++) {
        text += "<li>" + questions[0].choices[i] + "</li>"
        querySelector("#list-question").appendChild(text);
    }

}

