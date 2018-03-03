var score, roundScore, activePlayer;

var scores = [0,0];
var roundScore = 0;
activePlayer = 0;

var dice = document.querySelector(".dice");
dice.style.display = "none";
points = document.getElementById("score-0").textContent = "0";
points = document.getElementById("score-1").textContent = "0";
points = document.getElementById("current-0").textContent = "0";
points = document.getElementById("current-1").textContent = "0";

var btnRoll = document.querySelector(".btn-roll");
btnRoll.addEventListener("click", function(){
  var dice = Math.floor(Math.random () * 6) +1;
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  if (dice !== 1){
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }else{

  }
});

// document.querySelector("#current-" + activePLayer).textContent = dice;
