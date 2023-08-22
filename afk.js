let afkTimeout;
const afkThreshold = 10 * 60 * 1000; // 10 minutes in milliseconds
let afk = false;

function startReloadTimeout() {
  setTimeout(() => {
    if (afk == true) {
      location.reload();
    }
  }, 180000);
}

function resetAfkTimer() {
  clearTimeout(afkTimeout);
  afkTimeout = setTimeout(() => {
    document.querySelector('#afk').style.display = "block";
    startReloadTimeout();
    afk = true;
  }, afkThreshold);
}

function handleInteraction() {
  document.getElementById('afk').style.display = 'none';
  afk = false;
  resetAfkTimer();
}

document.addEventListener('mousemove', handleInteraction);
document.addEventListener('keydown', handleInteraction);
document.addEventListener('click', handleInteraction);

// Initialize the AFK timer on page load
resetAfkTimer();
