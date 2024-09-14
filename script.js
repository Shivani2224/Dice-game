var checkWinner = document.querySelector("h1");
var randomNum1 = Math.floor(Math.random() * 5 + 1);
var randomNum2 = Math.floor(Math.random() * 5 + 1);
var randomImg1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", "./images/dice" + randomNum1 + ".png");

var randomImg2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", "./images/dice" + randomNum2 + ".png");

if (randomNum1 === randomNum2) {
  checkWinner.textContent = "Draw";
} else if (randomNum1 < randomNum2) {
  checkWinner.textContent = "Player 2 Winner";
} else {
  checkWinner.textContent = "Player 1 Winner";
}
