const timer = document.getElementById("timer");

const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
function updateTimer(){

    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    timer.innerText = `${h}:${m}:${s}`;
}
startBtn.addEventListener("click", function(){

    if(timerInterval !== null){
        return;
    }

    timerInterval = setInterval(updateTimer, 1000);

});

stopBtn.addEventListener("click", function(){

    clearInterval(timerInterval);

    timerInterval = null;

});
resetBtn.addEventListener("click", function(){

    clearInterval(timerInterval);

    timerInterval = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerText = "00:00:00";

});