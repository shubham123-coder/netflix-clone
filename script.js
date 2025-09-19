document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("infoModal");
    const moreInfoBtn = document.querySelector(".info-btn");
    const closeBtn = document.querySelector(".close-btn");
  
    moreInfoBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      modal.style.animation = "fadeIn 0.3s ease";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Scroll rows with mouse wheel
    const rowContainers = document.querySelectorAll('.row-posters');
    rowContainers.forEach(container => {
      container.addEventListener('wheel', e => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      });
    });
  });
  

  // Get elements
const video = document.getElementById('movie');
const playPauseBtn = document.getElementById('playPauseBtn');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play / Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = "⏸ Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️ Play";
  }
});

// Skip backward 10 seconds
rewindBtn.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Skip forward 10 seconds
forwardBtn.addEventListener('click', () => {
  video.currentTime += 10;
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;

  // Time display update
  const current = formatTime(video.currentTime);
  const total = formatTime(video.duration);
  timeDisplay.textContent = `${current} / ${total}`;
});

// Seek using progress bar
progressBar.addEventListener('input', () => {
  video.currentTime = (progressBar.value / 100) * video.duration;
});

// Mute / Unmute
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔊 Unmute" : "🔇 Mute";
});

// Volume Control
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
});

// Fullscreen Mode
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Helper Function: format time as mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
