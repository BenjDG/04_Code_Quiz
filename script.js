
//console.log(window);

//DOM targets
var mainContentContainer = document.querySelector('main');

var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');
var startButton = document.querySelector('#start-button');

//create quiz HTML elements
var mainSectionEl = document.createElement('main');
var divEl1 = document.createElement('div');
var questionSection = document.createElement('div');
var quizQuestion = document.createElement('h2');
var quizOption1 = document.createElement('p');
var quizOption2 = document.createElement('p');
var quizOption3 = document.createElement('p');
var quizOption4 = document.createElement('p');



//build main template

divEl1.appendChild(questionSection);
questionSection.appendChild(quizQuestion);
questionSection.appendChild(quizOption1);
questionSection.appendChild(quizOption2);
questionSection.appendChild(quizOption3);
questionSection.appendChild(quizOption4);

//add styling
divEl1.setAttribute('class', 'd-flex justify-content-center');
questionSection.setAttribute('class', 'd-flex p-2 pt-5 flex-column');
quizQuestion.setAttribute('class', 'p-2');
quizOption1.setAttribute('class', 'p-2 btn btn-primary');
quizOption2.setAttribute('class', 'p-2 btn btn-primary');
quizOption3.setAttribute('class', 'p-2 btn btn-primary');
quizOption4.setAttribute('class', 'p-2 btn btn-primary');

//Score
var score = 0;
var timeLeft = 20;
var questionCounter = 0;
var questionPassed = false;

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



//question data bank
var questionsArray = [
    {
        question: "Which of the following is correct 1?",
        answers: [
            {
                a: "Dog1",
            },
            {
                b: "Cat1",
            },
            {
                c: "Mouse1",
            },
            {
                d: "All of the above1",
            },
        ],
        correctAnswer: "d"
    },

    {
        question: "Which of the following is correct 2?",
        answers: [
            {
                a: "Dog2",
            },
            {
                b: "Cat2",
            },
            {
                c: "Mouse2",
            },
            {
                d: "All of the above2",
            },
        ],
        correctAnswer: "d"
    },

    {
        question: "Which of the following is correct 3?",
        answers: [
            {
                a: "Dog3",
            },
            {
                b: "Cat3",
            },
            {
                c: "Mouse3",
            },
            {
                d: "All of the above3",
            },
        ],
        correctAnswer: "d"
    },

]

//clear page function
function clearPage() {
    while (mainContentContainer.hasChildNodes()) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }

}



//console.log(questionsArray.length);
//render quiz questions
function renderQuizQuestion(i) {

    //console.log(questionsArray[i]);
    //console.log(i);
    //console.log(questionsArray[i].correctAnswer);

    quizQuestion.textContent = questionsArray[i].question;
    quizOption1.textContent = questionsArray[i].answers[0].a;
    quizOption2.textContent = questionsArray[i].answers[1].b;
    quizOption3.textContent = questionsArray[i].answers[2].c;
    quizOption4.textContent = questionsArray[i].answers[3].d;

    //map answer
    var answerToQuestion = questionsArray[i].correctAnswer;
    //var selectionObjectKey = Object.keys(questionsArray[i].answers[0]).toString();

    //console.log(questionsArray[i].answers[0]);

    //get answer key as string
    //console.log(Object.keys(questionsArray[i].answers[0]).toString());
    //console.log("selection is " + selectionObjectKey);


    console.log("answerToQuestion is: " + answerToQuestion);


    //attach question to main section
    mainContentContainer.appendChild(divEl1);


    quizOption1.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(questionsArray[i].answers[0].a);

        var selectionObjectKey = Object.keys(questionsArray[i].answers[0]).toString();
        console.log("you selected: " + selectionObjectKey);
        console.log('correct answer is: ' + answerToQuestion);
        if(selectionObjectKey === answerToQuestion) {
            console.log("That is the correct answer.");
            i++;
            renderQuizQuestion(i);
        }

        //console.log(event);
        //console.log(event.target.parentElement);
        //alert('Option 1');
    });

    quizOption2.addEventListener('click', function () {
        event.preventDefault();
        console.log(questionsArray[i].answers[1].b);
        var selectionObjectKey = Object.keys(questionsArray[i].answers[1]).toString();
        console.log("you selected: " + selectionObjectKey);
        console.log('correct answer is: ' + answerToQuestion);
        if(selectionObjectKey === answerToQuestion) {
            console.log("That is the correct answer.");
            i++;
            renderQuizQuestion(i);
        }
        //alert('Option 2');
    });

    quizOption3.addEventListener('click', function () {
        event.preventDefault();
        console.log(questionsArray[i].answers[2].c);
        var selectionObjectKey = Object.keys(questionsArray[i].answers[2]).toString();
        console.log("you selected: " + selectionObjectKey);
        console.log('correct answer is: ' + answerToQuestion);
        if(selectionObjectKey === answerToQuestion) {
            console.log("That is the correct answer.");
            i++;
            renderQuizQuestion(i);
        }
        //alert('Option 3');
    });

    quizOption4.addEventListener('click', function () {
        event.preventDefault();
        console.log(questionsArray[i].answers[3].d);
        var selectionObjectKey = Object.keys(questionsArray[i].answers[3]).toString();
        console.log("you selected: " + selectionObjectKey);
        console.log('correct answer is: ' + answerToQuestion);
        if(selectionObjectKey === answerToQuestion) {
            console.log("That is the correct answer.");
            i++;
            renderQuizQuestion(i);

        }
        //alert('Option 4');
    });
}

//ask questions





//All done! Your final score is:  Enter initials

//function show highscores page
//Highscores with player names

//event listeners
mainContentContainer.addEventListener('click', function () {
    //alert('click on main content');
});


viewHighScoresButton.addEventListener('click', function () {
    alert('click on viewHighScoresButton');
});

// quizOption1.addEventListener('click', function () {
//     console.log(questionsArray[0].answers[0].correct);
//     alert('Option 1');
// });



timeView.addEventListener('click', function () {
    alert('click on timeView');
});

startButton.addEventListener('click', function () {
    clearPage();

    timer();


    if (questionPassed === false) {
        var i = 0;
        renderQuizQuestion(i);

        //if correct answer move to next question

    }








    //alert('click on startButton');
});