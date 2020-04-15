//declaring variables
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//setting the speed for mole peeps
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

//setting the function for starting the game. 10 seconds per game
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

function endGame() {
  if ((timeUp = true)) {
  }
}
moles.forEach((mole) => mole.addEventListener("click", bonk));

// Play background music
function play() {
  let audio = document.getElementById("sound");
  audio.play();
}

function whackSound() {
  let audio = document.getElementById("bgm");
  audio.whack();
}

//pause game function
let pausebtn = document.getElementById("pausebtn");
//Add event Handling
pausebtn.addEventListener("click", pause);

function pause() {
  if (game.played) {
    game.pause();
  } else {
    game.pause();
  }
}


//Setting a timer
let timeleft = 10;
let gameTime = setInterval(function () {
  timeleft--;
  document.getElementById("timer").textContent = timeleft;
  if (timeleft <= 0) clearInterval(gameTime);
}, 1000);

