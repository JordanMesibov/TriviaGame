// first, create a countdown timer that counts down and is displayed to the page
window.onload = function() {
  $("#start").on("click", start);
  $("#reset").on("click", reset);
};
//establish important variables necessary to start and reset the timer
var intervalID;
var timerRunning = false;
//set time to start from 60 seconds
var time = 60;
// declare flag for checking if the timer is at 0 yet
var timesUp = false;

var correctAnswers = 0;

// declare the reset function
function reset() {
  clearInterval(intervalID);
  time = 60;
  timesUp = false;
  timerRunning = false;
  correctAnswers = 0;
  console.log(correctAnswers);
  $("#riddleDisplay").empty();
  $("#timerDisplay").html("<h3>Time Remaining: " + time + " seconds</h3>");
}

// declare the start function
function start () {
  if (!timerRunning) {
    intervalID = setInterval(count, 1000);
    timerRunning = true;
    //hide the riddler image!!!!! ------------------
   
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
  endOfRiddles();
}


// create an array of riddles with properties
var riddles = [{
    riddleText: ["The older I am, the shorter I am. The younger I am, the taller I am. What am I?", "What can you add to a bucket of water in order to make it lighter?", "Forwards I am heavy, but backwards I am not. What am I?"],
    riddleChoices: ["A Candle", "A Tree", "A Person", "Holes", "Feathers", "A Shadow", "'Ton'", "An Upside-down Elephant", "A Rolling Stone"]
}];



// FIRST RIDDLE FUNCTION BELOW ================================================================================

// declare the function that will display the riddles to the riddleDisplay div
function riddlesGo () {
  //hide the riddler image

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
  document.getElementById("correct0").addEventListener("click", correctScreen0);
  document.getElementById("correct0").addEventListener("click", correctAnswersCount);
  console.log(correctAnswersCount);
  document.getElementById("incorrect0").addEventListener("click", incorrectScreen0);
  document.getElementById("incorrect00").addEventListener("click", incorrectScreen0);
}

// make the function that will show the Correct! screen and display it to the riddleDisplay div
function correctScreen0 () {
  $("#riddleDisplay").html("<h1>Correct!</h1>");
  $("#riddleDisplay").append(<img src="assets/images/abed.jpg" alt="Coolcoolcool"></img>);
  $("#riddleDisplay").append($("<button id='Next0'><h1>Next Riddle!</h1></button>"));
  document.getElementById("Next0").addEventListener("click", riddlesGoNext);
}

// make the function that will show the Incorrect! screen and display it to the riddleDisplay div
function incorrectScreen0 () {
  $("#riddleDisplay").html("<h1>Incorrect!</h1>");
  //insert a button to trigger the next riddle
  $("#riddleDisplay").append($("<button id='Next00'><h1>Next Riddle!</h1></button>"));
  document.getElementById("Next00").addEventListener("click", riddlesGoNext);
}

// SECOND RIDDLE FUNCTION BELOW ===============================================================

function riddlesGoNext () {
  $("#riddleDisplay").html("<h2>" + riddles[0].riddleText[1] + "</h2>");
  // add a line break
  $("#riddleDisplay").append("<br>");
  // append the first option for answering the riddle as a newly created button with an id of correct0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='correct1'>" + riddles[0].riddleChoices[3] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the second option for answering the riddle as a newly created button with a class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect1'>" + riddles[0].riddleChoices[4] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the third option for answering the riddle as a newly created button, also with class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect01'>" + riddles[0].riddleChoices[5] + "</button>"));
  // add event listeners for the right and wrong choices/buttons to trigger the correctScreen and incorrectScreen functions declared globally, afterwards
  document.getElementById("correct1").addEventListener("click", correctScreen1);
  document.getElementById("correct1").addEventListener("click", correctAnswersCount);
  console.log(correctAnswers);
  document.getElementById("incorrect1").addEventListener("click", incorrectScreen1);
  document.getElementById("incorrect01").addEventListener("click", incorrectScreen1);
}

function correctScreen1 () {
  $("#riddleDisplay").html("<h1>Correct!</h1>");
  $("#riddleDisplay").append($("<button id='Next2'><h1>Next Riddle!</h1></button>"));
  document.getElementById("Next2").addEventListener("click", riddlesGoNext1);
}

// make the function that will show the Incorrect! screen and display it to the riddleDisplay div
function incorrectScreen1 () {
  $("#riddleDisplay").html("<h1>Incorrect!</h1>");
  $("#riddleDisplay").append($("<button id='Next02'><h1>Next Riddle!</h1></button>"));
  document.getElementById("Next02").addEventListener("click", riddlesGoNext1);
}

// THIRD AND FINAL RIDDLE FUNCTION BELOW =================================================

// this will be the final riddle and will trigger a results screen at the end!
function riddlesGoNext1 () {
  $("#riddleDisplay").html("<h2>" + riddles[0].riddleText[2] + "</h2>");
  // add a line break
  $("#riddleDisplay").append("<br>");
  // append the first option for answering the riddle as a newly created button with an id of correct0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='correct2'>" + riddles[0].riddleChoices[6] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the second option for answering the riddle as a newly created button with a class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect2'>" + riddles[0].riddleChoices[7] + "</button>"));
  // add another line break
  $("#riddleDisplay").append("<br>");
  // append the third option for answering the riddle as a newly created button, also with class of incorrect0 to the riddleDisplay div
  $("#riddleDisplay").append($("<button id='incorrect02'>" + riddles[0].riddleChoices[8] + "</button>"));
  // add event listeners for the right and wrong choices/buttons to trigger the correctScreen and incorrectScreen functions declared globally, afterwards
  document.getElementById("correct2").addEventListener("click", correctScreen2);
  document.getElementById("correct2").addEventListener("click", correctAnswersCount);
  console.log(correctAnswers);
  //add code to stop the timer from ticking anymore if this button gets clicked
  clearInterval(intervalID);
  document.getElementById("incorrect2").addEventListener("click", incorrectScreen2);
  //add code to stop the timer from ticking anymore if this button gets clicked
  clearInterval(intervalID);
  document.getElementById("incorrect02").addEventListener("click", incorrectScreen2);
  //add code to stop the timer from ticking anymore if this button gets clicked
  clearInterval(intervalID);
}

function correctScreen2 () {
  $("#riddleDisplay").html("<h1>Correct!</h1>");
  $("#riddleDisplay").append($("<button id='Next3'><h1>Click To See Your Score!</h1></button>"));
  document.getElementById("Next3").addEventListener("click", endOfRiddles);
}

function incorrectScreen2 () {
  $("#riddleDisplay").html("<h1>Incorrect!</h1>");
  $("#riddleDisplay").append($("<button id='Next03'><h1>Click To See Your Score!</h1></button>"));
  document.getElementById("Next03").addEventListener("click", endOfRiddles);
}

function correctAnswersCount () {
  // increase the number of correct answers by 1
  correctAnswers += 1;
  console.log(correctAnswers);
}

function endOfRiddles () {
  $("#riddleDisplay").html("<h3>You answered " + correctAnswers + "/3 riddles correctly!</h3>");
  console.log(correctAnswers);
}