function MP3Player() {
    this.mySong = new Audio("song.mp3");
    this.statusPlay = false;
}

MP3Player.prototype.play = function () {
    this.mySong.play();
    this.statusPlay = true;
    document.getElementById("button").value = " || ";
};

MP3Player.prototype.pause = function () {
    this.mySong.pause();
    this.statusPlay = false;
    document.getElementById("button").value = "\u25BA";
};

MP3Player.prototype.touchButton = function () {
    if (this.statusPlay == false) this.play();
    else this.pause();
};