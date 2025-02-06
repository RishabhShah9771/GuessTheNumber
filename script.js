"use strict";

//what is DOM  ? &  what is  DOM manipulation?
//DOM stands for Document Object Model is structed representation of the HTML element, Which allows javascript to access its element and styles and allow them to manipulate using javascript.
// Repeating code again and again violets DRY code system

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreData = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Checking Button Code
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //Anything in the condition will return false as a boolean value so we need to check it the condition returns true or not.

  if (!guess) {
    document.querySelector(".message").textContent = "🤬 No Number!";
    displayMessage("Start guessing...");

    //When the Player wins the game
  } else if (guess === secretNumber) {
    displayMessage("😃 Correct Number!");
    document.querySelector(".score").textContent = scoreData;
    document.querySelector(".number").textContent = secretNumber;
    //Add Code to Change the Color when the Player wins the Game
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (scoreData > highScore) {
      highScore = scoreData;
      document.querySelector(".highscore").textContent = scoreData;
    }
    //When Changing the Css Style need to specify in the String only nothing else
  } else if (guess !== secretNumber) {
    if (scoreData > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 Number is too high!"
          : "📉 Number is too Low!"
      );

      scoreData--;
      document.querySelector(".score").textContent = scoreData;
    } else {
      displayMessage("LowScore");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//Above function will only be called when the event listens not directly when the code is loaded in the browser.

//Reset Button Code
document.querySelector(".again").addEventListener("click", function () {
  scoreData = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = scoreData;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//ANOTHER APPRAOCH FOR RESET BUTTON BELOW
// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });
