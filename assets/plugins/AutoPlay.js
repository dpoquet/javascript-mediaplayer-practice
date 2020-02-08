function AutoPlay() {}

AutoPlay.prototype.init = function(mediaPlayer) {
    mediaPlayer.mute();
    mediaPlayer.play();
}

export default AutoPlay;