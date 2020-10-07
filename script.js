//DOM targets
var mainContentContainer = document.querySelector('main');
var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');


//question data bank
var questionsArray = [
    {
        question: "Which brackets denote an object?",
        answers: ["<>", "{}", "[]", "All of the above"],
        correctAnswer: "{}"
    },
    {
        question: "Which word declares a variable?",
        answers: ["taco", "screwdriver", "Dan Cortez", "var"],
        correctAnswer: "var"
    },
    {
        question: "Which symbol is the assignment operator?",
        answers: ["=", "$", "+", "&"],
        correctAnswer: "="
    },

]

//start button
var startButton = document.createElement("button");
startButton.setAttribute('class', 'btn btn-primary');
startButton.textContent = "Start";
mainContentContainer.append(startButton);

//quiz elements
for (var i = 0; i < questionsArray.length; i++) {
    var question = document.createElement('h2');
    question.textContent = questionsArray[i].question;
    mainContentContainer.append(question);

    var answerOption = document.createElement('button');
    answerOption.setAttribute('class', 'btn btn-primary');

    questionsArray[i].answers.forEach(function (item) {
        console.log(item);

    });


    answerOption.textContent = "button";


    mainContentContainer.append(answerOption);
}

function handleClick(event) {

};

startButton.addEventListener('click', function (event) {
    console.log(event.target.parentElement);
});

//quiz




// //Timer Function
// function timer() {
//     var timerInterval = setInterval(function () {
//         timeLeft--;
//         timeView.textContent = "Time: " + timeLeft;

//         if (timeLeft === 0) {
//             clearInterval(timerInterval);
//             alert('game');
//         }

//     }, 1000)
// };

// //clear page function
// function clearPage() {
//     while (mainContentContainer.hasChildNodes()) {
//         mainContentContainer.removeChild(mainContentContainer.firstChild);
//     }

// }
