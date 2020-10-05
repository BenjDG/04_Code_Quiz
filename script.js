
console.log(window);

//DOM targets
var mainContentContainer = document.querySelector('main');
var viewHighScoresButton = document.querySelector('#view-highscores');
var timeView = document.querySelector('#clock-timer');
var startButton = document.querySelector('#start-button');

//Timer
var timer = 100;

//Score
var score = 0;

function clearPage() {

}

function quiz() {

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
    alert('click on startButton');
});