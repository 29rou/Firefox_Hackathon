var context;
  var brassdrum = null;
function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      dogBarkingBuffer = buffer;
    }, onError);
  }
  request.send();
  return dogBarkingBuffer;
}
function play(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}

window.addEventListener('load', init, false);
function init(){

  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  brassdrum = loadSound('./oto/brassdrum.wav');
}


