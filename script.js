let minutesEl = 0

function addMinutes(){
    minutesEl++;
    document.querySelector("#minutes").textContent = minutesEl
}   

document.querySelector("#minutes").addEventListener("click", function(){
    addMinutes();

 })

function removeMinutes(){
    minutesEl--;
    document.querySelector("#minutes").textContent = minutesEl
}

document.querySelector("#minutes").addEventListener("contextmenu", function(event){
    event.preventDefault();
    removeMinutes();
})




var minutesLabel = document.querySelector("#minutes");
var secondsLabel = document.querySelector("#seconds");
var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var timerEl = document.querySelector("#timer")
var totalSeconds;
var timerInterval;

function startTimer() {
    startButton.disabled = true;
    resetButton.disabled = false;
  
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
  
    minutesLabel.textContent = padTime(minutes);
    secondsLabel.textContent = padTime(seconds);
  
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      startButton.disabled = false;
      timerEl.innerHTML = "Tempo esgotado";
      timerEl.style.backgroundColor = "red";
    } else {
      totalSeconds--;
    }
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    resetButton.disabled = true;
  
    minutesLabel.textContent = '00';
    secondsLabel.textContent = '00';
  }
  
  function padTime(time) {
    return time.toString().padStart(2, '0');
  }
  
  startButton.addEventListener('click', function () {
    var inputSeconds = minutesEl * 60;
    totalSeconds = parseInt(inputSeconds, 10) || 0;
    
    if (totalSeconds > 0) {
      startTimer();
    }
  });
  
  resetButton.addEventListener('click', resetTimer);



  var resetButton = document.querySelector("#reset");
  function refreshPage() {
  location.reload();
  }

  resetButton.addEventListener("click", refreshPage);