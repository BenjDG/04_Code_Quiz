
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
quizOption1.setAttribute('class', 'p-2');
quizOption2.setAttribute('class', 'p-2');
quizOption3.setAttribute('class', 'p-2');
quizOption4.setAttribute('class', 'p-2');



//Timer
var timer = 100;

//Score
var score = 0;

//question data bank
var questionsArray = [
    {
        question: "Which of the following is correct about features of JavaScript?",
        answers: [
            {
                text: "JavaScript is a lightweight, interpreted programming language.",
                correct: false,
            },
            {
                text:
                    "JavaScript is designed for creating network-centric applications.",
                correct: false,
            },
            {
                text: "JavaScript is complementary to and integrated with Java.",
                correct: false,
            },
            {
                text: "All of the above",
                correct: true,
            },
        ]
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        answers: [
            {
                text: "JavaScript is a lightweight, interpreted programming language.",
                correct: false,
            },
            {
                text:
                    "JavaScript is designed for creating network-centric applications.",
                correct: false,
            },
            {
                text: "JavaScript is complementary to and integrated with Java.",
                correct: false,
            },
            {
                text: "All of the above",
                correct: true,
            },
        ]
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        answers: [
            {
                text: "JavaScript is a lightweight, interpreted programming language.",
                correct: false,
            },
            {
                text:
                    "JavaScript is designed for creating network-centric applications.",
                correct: false,
            },
            {
                text: "JavaScript is complementary to and integrated with Java.",
                correct: false,
            },
            {
                text: "All of the above",
                correct: true,
            },
        ]
    },
]

//clear page function
function clearPage() {
    while (mainContentContainer.hasChildNodes()) {
        mainContentContainer.removeChild(mainContentContainer.firstChild);
    }

}


//render quiz questions
function quiz() {

    quizQuestion.textContent = 'test';
    quizOption1.textContent = 'test1';
    quizOption2.textContent = 'test2';
    quizOption3.textContent = 'test3';
    quizOption4.textContent = 'test4';

    mainContentContainer.appendChild(divEl1);
}


//question bank array or objects



//main page
// $('#start-button').on('click', function() {
// clearPage();
// alert('clear!');
// });

//quiz section


//All done! Your final score is:  Enter initials

//function show highscores page
//Highscores with player names

//event listeners
mainContentContainer.addEventListener('click', function () {
    alert('click on main content');
});


viewHighScoresButton.addEventListener('click', function () {
    alert('click on viewHighScoresButton');
});

timeView.addEventListener('click', function () {
    alert('click on timeView');
});

startButton.addEventListener('click', function () {
    clearPage();
    quiz();
    alert('click on startButton');
});