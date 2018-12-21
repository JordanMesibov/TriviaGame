// first, create a countdown timer that counts down and is displayed to the page
window.onload = function() {
  $("#start").on("click", start);
  $("#reset").on("click", reset);
};
//establish important variables necessary to start and reset the timer
var intervalID;
var timerRunning = false;
//set time to start from 90 seconds
var time = 90;
// declare flag for checking if the timer is at 0 yet
var timesUp = false;

// declare the reset function
function reset() {
  clearInterval(intervalID);
  time = 90;
  timesUp = false;
  timerRunning = false;
  $("#riddleDisplay").empty();
  $("#timerDisplay").html("<h3>Time Remaining: " + time + " seconds</h3>");
}

// declare the start function
function start () {
  if (!timerRunning) {
    intervalID = setInterval(count, 1000);
    timerRunning = true;
    riddlesGo ();
  }
}

function count () {
  time--;
  $("#timerDisplay").html("<h3>Time Remaining: " + time + " seconds</h3>");
  if (time===0) {
    timesUp = true;
    timerRunning = false;
    alert("Time's Up, Slowpoke!");
    gameOver ();
  }
}

function gameOver () {
  clearInterval(intervalID);
  time = 0;
  $("#riddleDisplay").html("<h3>Game Over!</h3>");
}


// create an array of riddles with properties
var riddles = [{
    riddleText: ["The older I am, the shorter I am. The younger I am, the taller I am. What am I?", "Insert the second riddle here", "Insert the third riddle here"],
    riddleChoices: ["A Candle", "A Tree", "A Person"],
    correctChoice: ["A Candle"]
}];

// declare the function that will display the riddles to the riddleDisplay div
function riddlesGo () {
  // rewrite the riddleDisplay div to show the first riddle
  $("#riddleDisplay").html("<h2>" + riddles[0].riddleText[0] + "</h2>");
  // add a line break
  $("#riddleDisplay").append("<br>");
  // append the first option for answering the riddle as a newly created button with an id of correct0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='correct0'>" + riddles[0].riddleChoices[0] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the second option for answering the riddle as a newly created button with a class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect0'>" + riddles[0].riddleChoices[1] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the third option for answering the riddle as a newly created button, also with class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect00'>" + riddles[0].riddleChoices[2] + "</button>"));
  // add event listeners for the right and wrong choices/buttons to trigger the correctScreen and incorrectScreen functions declared globally, afterwards
  document.getElementById("correct0").addEventListener("click", correctScreen);
  document.getElementById("incorrect0").addEventListener("click", incorrectScreen);
  document.getElementById("incorrect00").addEventListener("click", incorrectScreen);
}

// make the function that will show the Correct! screen and display it to the riddleDisplay div
function correctScreen () {
  $("#riddleDisplay").html("<h1>Correct!</h1>");
}

// make the function that will show the Incorrect! screen and display it to the riddleDisplay div
function incorrectScreen () {
  $("#riddleDisplay").html("<h1>Incorrect!</h1>");
}