window.addEventListener('DOMContentLoaded', () => {
  //Countdown timer
  function formatCountdown(totalSeconds) {
    let days = Math.floor(totalSeconds / (24 * 3600));
    let hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let formattedDays = String(days).padStart(2, '0');
    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');

    return formattedDays + ":" + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  }

  function getRandomNumber(min) {
    let max = min + 4200;
    // Ensure the inputs are numbers and handle edge cases
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both inputs must be numbers.');
    }
    if (min > max) {
        throw new Error('The first number must be less than or equal to the second number.');
    }

    // Generate a random number between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startCountdown(totalSeconds) {
    let parentElement = document.querySelector('.js-countdown-timer');
    let timerElement = document.querySelector('.js-countdown-timer span');
    let countdownData = parentElement.getAttribute('data-countdown');

    totalSeconds = parseInt(countdownData);

    totalSeconds = getRandomNumber(totalSeconds);

    console.log(totalSeconds);

    function updateTimer() {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        timerElement.textContent = "00:00:00:00";
        return;
      }
      timerElement.textContent = formatCountdown(totalSeconds);
      totalSeconds--;
    }

    updateTimer();
    let interval = setInterval(updateTimer, 1000);
  }

  // Example usage: start a countdown from 100000 seconds
  startCountdown();
});