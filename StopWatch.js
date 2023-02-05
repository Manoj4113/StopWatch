// Selecting the main container for the stopwatch
    const stopwatch = document.querySelector(".stopwatch");
    // Selecting the display area for the time
    const time = stopwatch.querySelector(".time");
    // Selecting the start button
    const startBtn = stopwatch.querySelector(".start");
    // Selecting the pause button
    const pauseBtn = stopwatch.querySelector(".pause");
    // Selecting the reset button
    const resetBtn = stopwatch.querySelector(".reset");

    // A variable to keep track of the running status of the stopwatch
    let running;
    // A variable to keep track of the duration of the stopwatch
    let duration = 0;

    // Function to start the stopwatch
    function start() {
      // If the stopwatch is already running, return
      if (running) {
        return;
      }
      // Set the running status to true
      running = true;
      // Call the increment function to update the time
      increment();
      // Hide the start button
      startBtn.style.display = "none";
      // Show the pause button
      pauseBtn.style.display = "inline-block";
    }

    // Function to pause the stopwatch
    function pause() {
      // If the stopwatch is not running, return
      if (!running) {
        return;
      }
      // Set the running status to false
      running = false;

  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
}

function reset() {
  duration = 0;
  time.textContent = "00:00:00";
  running = false;
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
}

function increment() {
  if (!running) {
    return;
  }
  duration++;
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.textContent = `${minutes}:${seconds}:00`;
  setTimeout(increment, 1000);
}
//adding event Listeners
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
