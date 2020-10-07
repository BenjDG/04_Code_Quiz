//DOM targets
var mainContentContainer = document.querySelector('main');
//var viewHighScoresButton = document.querySelector('#view-highscores');
//var timeView = document.querySelector('#clock-timer');

//start button
var startButton = document.createElement("button");
startButton.setAttribute('class', 'btn btn-primary');
startButton.textContent = "Start";
mainContentContainer.append(startButton);



//this counter is used to increment through the array of questions
var questionCounter = 0;

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

console.log(questionsArray.length);



//render question
function renderQuestion(i) {

    var currentQuestion = questionsArray[i].question;
    var currentOption = questionsArray[i].answers;

    var h2 = document.createElement('h2');
    h2.textContent = currentQuestion;

    function makeButton(button, index, arr) {
        var button = document.createElement('button');
        button.textContent = arr[index];
        h2.appendChild(button);

        button.addEventListener('click', function (event) {
            if (event.target.textContent == questionsArray[i].correctAnswer) {
                questionCounter++;

                clearPage();
                if (questionCounter < questionsArray.length) {
                  renderQuestion(questionCounter);  
                } else {
                    console.log("DONE");
                }
            }
        });
    };

    currentOption.forEach(makeButton);
    mainContentContainer.appendChild(h2);
}


//Timer Function
function timer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeView.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert('game');
        }
    }, 1000)
};

//start button listener
startButton.addEventListener('click', function() {
    renderQuestion(questionCounter);
});

// //clear page function
function clearPage() {
    while (mainContentContainer.hasChildNodes()) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }
}
