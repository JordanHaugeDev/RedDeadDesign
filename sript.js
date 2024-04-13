const audioElement = document.getElementById("audio-element");
const playSoundLink = document.getElementById("#play-sound");

playSoundLink.addEventListener("click", function () {
  audioElement.play();
});
