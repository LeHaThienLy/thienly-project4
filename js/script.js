var myVideo = $('#video');

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}