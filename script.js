//DOM targets
var mainContentContainer = document.querySelector('main');
var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');

//render main page
var mainTitle = document.createElement('h1');
mainTitle.textContent = "Javascript Quiz";


var paragraphEl = document.createElement('p');
paragraphEl.textContent = "You have 30 seconds to complete the quiz.  Each wrong answer reduces your time by 5 seconds.  Your score will equal the number of seconds left at the end."


var startButton = document.createElement("button");
startButton.setAttribute('class', 'btn btn-primary');
startButton.textContent = "Start";

mainContentContainer.appendChild(mainTitle);
mainContentContainer.appendChild(paragraphEl);
mainContentContainer.appendChild(startButton);



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
                    //console.log("DONE");
                    finalTime = timeLeft;
                    //console.log('final time: ' + finalTime);
                    clearInterval(timerInterval);
                    quizCompletedfun();
                }
            } else {
                timeLeft -= 5;
            }

        });
    };

    currentOption.forEach(makeButton);
    mainContentContainer.appendChild(h2);
}

var timeLeft = 30;
var timerInterval;
var finalTime;
//Timer Function
function timer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timeView.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert('game');
        }
    }, 1000)
};

//start button listener
startButton.addEventListener('click', function () {
    timer();
    clearPage();
    renderQuestion(questionCounter);
});


// //clear page function
function clearPage() {
    while (mainContentContainer.hasChildNodes()) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }
}


//render quiz completed
var quizCompletedfun = function quizCompleted() {
    clearPage();

    var form = document.createElement('form');
    var h3 = document.createElement('h3');
    h3.textContent = "Your final score is: " + finalTime;

    var p = document.createElement('p');
    p.textContent = "Enter your name to add you score to the highscores list."

    var input = document.createElement('input');
    var submit = document.createElement('button');
    submit.textContent = 'submit';

    mainContentContainer.appendChild(form);
    form.appendChild(h3);
    form.appendChild(p);
    form.appendChild(input);
    form.appendChild(submit);

}


//render highscores page

var renderHighscorePage = function () {
    clearPage();
    var highscoreTitle = document.createElement('h3');
    highscoreTitle.textContent = "Highscores";

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.textContent = "a highscore name and score";

    var backButton = document.createElement('button');
    backButton.textContent = "Back to main page";
    backButton.setAttribute('onclick','location.href="./index.html"');
    //need to make button work
    // backButton.addEventListener('click', function() {
    //     location.reload();
    // });


    mainContentContainer.appendChild(highscoreTitle);
    ul.appendChild(li);
    mainContentContainer.appendChild(ul);
    mainContentContainer.appendChild(backButton);
    
    

}

//renderHighscorePage();

viewHighScoresButton.addEventListener('click', function() {
    renderHighscorePage();
});