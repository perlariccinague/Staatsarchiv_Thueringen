const playPause = (event) => {
  event.preventDefault();
  const videoElement = document.querySelector('video');
  if(videoElement.paused) {
    console.log('Start playing');
    videoElement.play();
  } else {
    console.log('Pausing');
    videoElement.pause();
  }
}

const addClassToAllPreviousTextElements = (element) => {
  if(element.classList.contains('video_container') && element.parentElement.previousElementSibling) {
    addClassToAllPreviousTextElements(element.parentElement.previousElementSibling);
  } else if(element.classList.contains('ce_text')) {
    element.classList.add('text-before-video');
    if(element.previousElementSibling !== null) {
      addClassToAllPreviousTextElements(element.previousElementSibling)
    }
  }
}

if(document.querySelector('.video_container')) {
  const videoContainer = document.querySelector('.video_container');
  const videoElement = videoContainer.querySelector('video');
  addClassToAllPreviousTextElements(videoContainer);

  videoElement.addEventListener('play', () => {
    if (videoElement.requestFullscreen)
      videoElement.requestFullscreen();
    else if (videoElement.webkitRequestFullscreen)
      videoElement.webkitRequestFullscreen();
    else if (videoElement.msRequestFullScreen)
      videoElement.msRequestFullScreen();
  })

}
