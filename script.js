const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.querySelector('.play-pause-btn');
const nightModeBtn = document.querySelector('.night-mode-btn');
const modelViewer = document.querySelector('model-viewer');

playPauseBtn.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

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

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  nightModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  modelViewer.style.backgroundColor = 'rgb(10, 10, 10)';
  isNightMode = true;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
});
