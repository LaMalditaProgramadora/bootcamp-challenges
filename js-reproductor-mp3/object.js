const mp3Player = {
  mySong: new Audio("song.mp3"),
  statusPlay: false,
  play: function () {
    this.mySong.play();
    this.statusPlay = true;
    document.getElementById("button").value = " || ";
  },
  pause: function () {
    this.mySong.pause();
    this.statusPlay = false;
    document.getElementById("button").value = "\u25BA";
  },
  touchButton: function () {
    if (this.statusPlay == false) this.play();
    else this.pause();
  },
};
