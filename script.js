const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.querySelector('.play-pause-btn');

playPauseBtn.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

const nightModeBtn = document.querySelector('.night-mode-btn');
const modelViewer = document.querySelector('model-viewer');

let isNightMode = false;

nightModeBtn.addEventListener('click', function() {
  if (!isNightMode) {
    modelViewer.style.backgroundColor = 'rgb(10, 10, 10)';
    nightModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    isNightMode = true;
  } else {
    modelViewer.style.backgroundColor = 'rgb(255, 255, 255)';
    nightModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    isNightMode = false;
  }
});

// detect if the user has set their computer to prefer dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  nightModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  modelViewer.style.backgroundColor = 'rgb(10, 10, 10)';
  isNightMode = true;
}