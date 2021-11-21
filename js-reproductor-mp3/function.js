const mySong = new Audio("song.mp3");
let statusPlay = false;

function play() {
  mySong.play();
  statusPlay = true;
  document.getElementById("button").value = " || ";
}

function pause() {
  mySong.pause();
  statusPlay = false;
  document.getElementById("button").value = "\u25BA";
}

function touchButton() {
  if (statusPlay == false) play();
  else pause();
}
