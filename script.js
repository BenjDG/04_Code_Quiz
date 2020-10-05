
//console.log(window);

//DOM targets
var mainContentContainer = document.querySelector('main');

var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');
var startButton = document.querySelector('#start-button');

//create quiz HTML elements
var mainSectionEl = document.createElement('main');
var questionSection = document.createElement('div');
var quizQuestion = document.createElement('h2');
var quizOption1 = document.createElement('p');
var quizOption2 = document.createElement('p');
var quizOption3 = document.createElement('p');
var quizOption4 = document.createElement('p');
var divEl = document.createElement('div');

questionSection.appendChild(quizQuestion);
questionSection.appendChild(quizOption1);
questionSection.appendChild(quizOption2);
questionSection.appendChild(quizOption3);
questionSection.appendChild(quizOption4);


//Timer
var timer = 100;

//Score
var score = 0;

function clearPage() {
    while (mainContentContainer.hasChildNodes()) {  
        mainContentContainer.removeChild(mainContentContainer.firstChild);
      }

}

    function quiz() {
    
    quizQuestion.textContent = 'test';
    quizOption1.textContent = 'test1';
    quizOption2.textContent = 'test2';
    quizOption3.textContent = 'test3';
    quizOption4.textContent = 'test4';

    mainContentContainer.appendChild(questionSection);
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