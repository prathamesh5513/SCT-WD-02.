let timer;
let ms = 0, sec = 0, min = 0, hr = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function updateDisplay() {
  let formatted = 
    (hr < 10 ? '0' + hr : hr) + ':' +
    (min < 10 ? '0' + min : min) + ':' +
    (sec < 10 ? '0' + sec : sec) + '.' +
    (ms < 10 ? '0' + ms : ms);
  display.textContent = formatted;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      ms++;
      if (ms === 100) {
        ms = 0;
        sec++;
      }
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (min === 60) {
        min = 0;
        hr++;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  ms = 0; sec = 0; min = 0; hr = 0;
  updateDisplay();
  laps.innerHTML = '';
}

function addLap() {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', addLap);
