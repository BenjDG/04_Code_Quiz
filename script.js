//DOM targets
var mainContentContainer = document.querySelector('main');
var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');
var notif = document.querySelector('#right-wrong-notification');

//arrays
var highscores = [];
var highscoresNames = [];

init();

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
                correctAnswerMessage();
                questionCounter++;
                clearPage();
                if (questionCounter < questionsArray.length) {
                    renderQuestion(questionCounter);

                } else {
                    finalTime = timeLeft;
                    clearInterval(timerInterval);
                    quizCompletedfun();
                }
            } else {
                timeLeft -= 5;
                wrongAnswerMessage();
                clearPage();
                if (questionCounter < questionsArray.length) {
                    renderQuestion(questionCounter);
                } else {
                    finalTime = timeLeft;
                    clearInterval(timerInterval);
                    quizCompletedfun();
                }
            }
        });
    };

    currentOption.forEach(makeButton);
    mainContentContainer.appendChild(h2);
}

//correctAnswerMessage();
function correctAnswerMessage() {
    
        var par = document.createElement('p');
        par.textContent = "Correct!";
        notif.appendChild(par);
        setTimeout(function() {
            while (notif.hasChildNodes()) {
                notif.removeChild(notif.firstChild);
            }
        },3000);  
}



//wrongAnswerMessage
function wrongAnswerMessage() {
    var par = document.createElement('p');
    par.textContent = "Wrong!";
    notif.appendChild(par);
    setTimeout(function() {
        while (notif.hasChildNodes()) {
            notif.removeChild(notif.firstChild);
        }
    },3000);
}


var timeLeft = 30;
var timerInterval;
var finalTime;
//Timer Function
function timer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timeView.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Game Over');
            window.location.href = './index.html'
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
    form.setAttribute('id', "score-form");
    form.setAttribute('method', 'POST');

    var h3 = document.createElement('h3');
    h3.textContent = "Your final score is: " + finalTime;

    var p = document.createElement('p');
    p.textContent = "Enter your name to add you score to the highscores list."

    var input = document.createElement('input');
    input.name = "name";
    input.value = "";

    var submit = document.createElement('button');
    submit.textContent = 'submit';


    mainContentContainer.appendChild(form);
    form.appendChild(h3);
    form.appendChild(p);
    form.appendChild(input);
    form.appendChild(submit);

    formInput = document.querySelector('#score-form');

    //submit listener
    formInput.addEventListener("submit", function (event) {
        event.preventDefault();

        var usersName = event.target.elements.name.value;
        var usersScore = finalTime;

        if (usersName === "") {
            return;
        }

        highscores.push(usersScore);
        highscoresNames.push(usersName);

        storeScore();
        
        //renderHighscorePage();
        renderHighscorePage();
    });

}

//load data from local storage when page loads
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    var storedNames = JSON.parse(localStorage.getItem("names"));

    if (storedScores !== null) {
        highscores = storedScores;
    }
    if (storedNames !== null) {
        highscoresNames = storedNames;
    }
}


//store score to local storage

function storeScore() {
    localStorage.setItem('scores', JSON.stringify(highscores));
    localStorage.setItem('names', JSON.stringify(highscoresNames));
    //renderHighscorePage();
}




//render highscores page
var renderHighscorePage = function () {
    clearPage();
    sortLocalStorage();
    var highscoreTitle = document.createElement('h3');
    highscoreTitle.textContent = "Highscores";

    var ul = document.createElement('ul');

    for (var z = 0; z < highscores.length; z++) {
        var li = document.createElement('li');
        li.textContent = highscoresNames[z] + " " + highscores[z];
        ul.appendChild(li);

    }


    var backButton = document.createElement('button');
    backButton.textContent = "Back to main page";
    backButton.setAttribute('onclick', 'location.href="./index.html"');

    mainContentContainer.appendChild(highscoreTitle);

    mainContentContainer.appendChild(ul);
    mainContentContainer.appendChild(backButton);


}

//renderHighscorePage();
viewHighScoresButton.addEventListener('click', function () {
    renderHighscorePage();
});


//sort local storage
function sortLocalStorage() {

    //combine
    var tempList = [];
    for (var z = 0; z < highscoresNames.length; z++) {
        tempList.push({ 'highscoresNames': highscoresNames[z], 'highscores': highscores[z] });
    }

    //sort
    tempList.sort(function (a, b) {
        return ((a.highscores > b.highscores) ? -1 : ((a.highscores == b.highscores) ? 0 : 1));
    });

    //separate
    for (var z = 0; z < tempList.length; z++) {
        highscores[z] = tempList[z].highscores;
        highscoresNames[z] = tempList[z].highscoresNames;
    }

    storeScore();
}
