let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.getElementById("songTitle");
let artistTitle = document.getElementById("artistTitle");
let volumeControl = document.getElementById("volume");

let playlist = [
    { title: "A Crush On You", artist: "L i v e r r Z z", src: "audio/A Crush On You.mp3" },
    { title: "Molly", artist: "Playboi Carti, Noctis", src: "audio/Molly-Playboi Carti (Noctis Remix).mp3" },
    { title: "Late Call", artist: "L i v e r r Z z", src: "audio/Late Call.mp3" },
];

let currentSongIndex = 0;

function loadSong(index) {
    song.src = playlist[index].src;
    songTitle.textContent = playlist[index].title;
    artistTitle.textContent = playlist[index].artist;
    song.load();
    playPause();
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

progress.oninput = function() {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

progress.onchange = function() {
    song.currentTime = progress.value;
}

song.onended = function() {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
}

function restartSong() {
    song.currentTime = 0;
    progress.value = 0;
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playPause();
}

function previousSong() {
    if (song.currentTime > 5) {
        restartSong();
    } else {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        playPause();
    }
}

volumeControl.oninput = function() {
    song.volume = this.value;
}