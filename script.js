let count = 0;
let timeLeft = 10.0;
let timerRunning = false;
let timer;

const tapButton = document.getElementById("tapButton");
const restartButton = document.getElementById("restartButton");
const timerDisplay = document.getElementById("timer");
const countDisplay = document.getElementById("count");

tapButton.addEventListener("click", () => {
    if (!timerRunning) {
        startTimer();
    }
    if (timeLeft > 0) {
        count++;
        countDisplay.textContent = count;
    }
});

restartButton.addEventListener("click", resetGame);

function startTimer() {
    timerRunning = true;
    timer = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeLeft = 0;
        }
        timerDisplay.textContent = timeLeft.toFixed(1) + "秒";
    }, 100);
}

function resetGame() {
    clearInterval(timer);
    count = 0;
    timeLeft = 10.0;
    timerRunning = false;
    countDisplay.textContent = count;
    timerDisplay.textContent = timeLeft.toFixed(1) + "秒";
}