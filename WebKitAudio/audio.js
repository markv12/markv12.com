var audio;

try {
  audio = new window.AudioContext();
}
catch (error) {
  audio = new window.webkitAudioContext();
}

var position = 0;
var scale = {
    g: 392,
    f: 349.23,
    e: 329.63,
    b: 493.88,
    d: 293.66,
    c: 261.63
};
var song = "fdcdfff-ddd-fgg-fdcdffffddfdc---";
var oscillatorType = "sine";

setInterval(play, 1000 / 4);

function createOscillator(freq) {
    var attack = 10,
        decay = 250,
        gain = audio.createGain(),
        osc = audio.createOscillator();
    osc.type=oscillatorType;

    gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

    osc.frequency.value = freq;
    osc.connect(gain);
    osc.start(0);

    setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
        gain.disconnect(audio.destination);
    }, decay)
}

function play() {
    var note = song.charAt(position),
        freq = scale[note];
    position += 1;
    if(position >= song.length) {
        position = 0;
    }
    if(freq) {
        createOscillator(freq);
    }
}


function toSawtooth(){
	oscillatorType="sawtooth";
}
function toSine(){
	oscillatorType="sine";
}
function toSquare(){
	oscillatorType="square";
}