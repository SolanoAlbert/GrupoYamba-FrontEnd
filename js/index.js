let currentlyPlaying = null;

function radio24() {
    const radio = document.getElementById('radio24');
    
    if (currentlyPlaying && currentlyPlaying !== radio) {
        currentlyPlaying.pause();
    }
    
    if (radio.paused) {
        radio.play();
        currentlyPlaying = radio;
    } else {
        radio.pause();
        currentlyPlaying = null;
    }
}

function radioRC() {
    const radio = document.getElementById('radioRC');
    
    if (currentlyPlaying && currentlyPlaying !== radio) {
        currentlyPlaying.pause();
    }
    
    if (radio.paused) {
        radio.play();
        currentlyPlaying = radio;
    } else {
        radio.pause();
        currentlyPlaying = null;
    }
}

function radioSarat() {
    const radio = document.getElementById('radioSarat');
    
    if (currentlyPlaying && currentlyPlaying !== radio) {
        currentlyPlaying.pause();
    }
    
    if (radio.paused) {
        radio.play();
        currentlyPlaying = radio;
    } else {
        radio.pause();
        currentlyPlaying = null;
    }
}

function radioYamba() {
    const radio = document.getElementById('radioYamba');
    
    if (currentlyPlaying && currentlyPlaying !== radio) {
        currentlyPlaying.pause();
    }
    
    if (radio.paused) {
        radio.play();
        currentlyPlaying = radio;
    } else {
        radio.pause();
        currentlyPlaying = null;
    }
}

function test1() {
    alert("La página está en progreso");
}