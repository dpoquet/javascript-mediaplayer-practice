import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';


const video = document.getElementById("mediaPlayer");
const mediaPlayer = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.getElementById("playButton");
const muteButton = document.getElementById("muteButton");

playButton.onclick = () => mediaPlayer.togglePlay();
muteButton.onclick = () => mediaPlayer.toggleMute();