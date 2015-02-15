var navigator = window.navigator;
var Context = window.AudioContext || window.webkitAudioContext;
var context = new Context();

// audio
var mediaStream;
var rec;

// video
var videoMediaStream;
var video;

navigator.getUserMedia = (
  navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
);

function record() {
  navigator.getUserMedia({audio: true}, function(localMediaStream){
    mediaStream = localMediaStream;
    var mediaStreamSource = context.createMediaStreamSource(localMediaStream);
    rec = new Recorder(mediaStreamSource, {
      workerPath: '/bower_components/Recorderjs/recorderWorker.js'
    });

    rec.record();
  }, function(err){
    console.log('Not supported');
  });
}

function stop() {
  mediaStream.stop();
  rec.stop();

  rec.exportWAV(function(e){
    rec.clear();
    Recorder.forceDownload(e, "test.wav");
  });
}

function recordVideo() {
  $('#recordButtons').fadeOut();
  $('#getDiscovered').html('Recording...');

  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream){
    videoMediaStream = localMediaStream;
    var Context = window.AudioContext || window.webkitAudioContext;
    var context = new Context();
    var mediaStreamSource = context.createMediaStreamSource(localMediaStream);

    video = document.querySelector('#record_video');
    video.src = URL.createObjectURL(localMediaStream);
    video.play();
    $("#countdown").show(1000);
    countdown();
  }, function(err){
    console.log('Not supported');
  });
}

// === Countdown JS ===

var seconds;
var temp;



function countdown() {

  seconds = document.getElementById('countdown').innerHTML;
  seconds = parseInt(seconds, 10);

  if (seconds == 1) {
    temp = document.getElementById('countdown');
    temp.innerHTML = "7";
    video.pause();
    videoMediaStream.stop();
    $(".action").click();
    return;
  }

  seconds--;
  temp = document.getElementById('countdown');
  temp.innerHTML = seconds;
  timeoutMyOswego = setTimeout(countdown, 1000);

} 
 




function stopVideo() {
  video.pause();
  videoMediaStream.stop();
}
