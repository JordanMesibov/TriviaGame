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
    riddleChoices: ["A: insert the first choice for the first riddle here", "B: insert the second choice for the first riddle here", "C: insert the first riddles third choice"],
}]

// declare the function that will display the riddles to the riddleDisplay div
function riddlesGo () {
  $("#riddleDisplay").html(riddles[0].riddleText[0]);
}