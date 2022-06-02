const squares = document.getElementsByClassName("square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerID = null;
let rSquare = 0;

function randomSquare() {

    if (rSquare != 0) {
        rSquare.removeEventListener("mousedown", addScore);
    }

    rSquare = squares[Math.floor(Math.random() * 9)];
    
    for (i=0; i<9; i++){
        if (squares[i].classList.contains("mole")) {
            squares[i].classList.toggle("mole");
        }
    }

    rSquare.classList.add("mole");

    rSquare.addEventListener("mousedown", addScore);
}

function addScore() {
    result++;
    score.textContent = result;
    // self.removeEventListener;
}

function moveMole() {
    timerID = setInterval(randomSquare, 500);
}


moveMole();

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime;

 if (currentTime == 0){
     clearInterval(countDownTimerId)
     clearInterval(timerID)
     alert("Game Over! Your final score is " + result);
 }
}

let countDownTimerId = setInterval(countDown, 1000);