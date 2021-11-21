class MP3Player {
  constructor() {
    this.mySong = new Audio("song.mp3");
    this.statusPlay = false;
  }
  play() {
    this.mySong.play();
    this.statusPlay = true;
    document.getElementById("button").value = " || ";
  }
  pause() {
    this.mySong.pause();
    this.statusPlay = false;
    document.getElementById("button").value = "\u25BA";
  }
  touchButton() {
    if (this.statusPlay == false) this.play();
    else this.pause();
  }
}
